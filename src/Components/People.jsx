import React, { useState } from "react";
import usePeople from "../hook/usePeople";

const People = () => {
  const { people, createPerson, updatePerson, deletePerson } = usePeople();
  const [newPerson, setNewPerson] = useState({ name: "", surname: "", age: "" });

  // ✅ Formni yuborish
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPerson.name && newPerson.surname && newPerson.age) {
      createPerson({ ...newPerson, age: Number(newPerson.age) });
      setNewPerson({ name: "", surname: "", age: "" });
    }
  };

  return (
    <div>
      <h1>People List</h1>
      
      {/* ✅ Yangi odam qo‘shish uchun forma */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newPerson.name}
          onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Surname"
          value={newPerson.surname}
          onChange={(e) => setNewPerson({ ...newPerson, surname: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newPerson.age}
          onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })}
        />
        <button type="submit">Add Person</button>
      </form>

      {/* ✅ Odamlar ro‘yxati */}
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} {person.surname}, Age: {person.age}
            <button onClick={() => updatePerson(person.id, { name: "Updated Name" })}>
              Edit
            </button>
            <button onClick={() => deletePerson(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;

