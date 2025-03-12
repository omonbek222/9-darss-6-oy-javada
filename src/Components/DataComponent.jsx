import React, { useState } from "react";
import useApi from "./useApi";

const DataComponent = () => {
  const { data, loading, error, createData, updateData, deleteData } = useApi("https://api.example.com/items");
  const [newItem, setNewItem] = useState("");


  const handleCreate = () => {
    const item = { name: newItem };
    createData(item);
    setNewItem(""); 
  };

  return (
    <div>
      <h1>Ma'lumotlar</h1>

      {loading && <p>Yuklanmoqda...</p>}
      {error && <p>Xatolik: {error}</p>}

      {/* Ma'lumotni ko'rsatish */}
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => updateData(item.id, { name: "Yangi nom" })}>Yangilash</button>
            <button onClick={() => deleteData(item.id)}>O'chirish</button>
          </li>
        ))}
      </ul>

      {/* Yangi item qo'shish */}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Yangi item"
      />
      <button onClick={handleCreate}>Qo'shish</button>
    </div>
  );
};

export default DataComponent;
