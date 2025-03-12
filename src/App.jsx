import React from "react";
import People from "./Components/People"; // People komponentini chaqiramiz

const App = () => {
  return (
    <div>
      <h1>CRUD App</h1>
      <People /> {/* Odamlar ro‘yxatini chiqarish */}
    </div>
  );
};

export default App;