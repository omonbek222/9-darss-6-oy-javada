import { useState } from "react";

const usePeople = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "karimjanov", surname: "omonbe", age: 25 },
    { id: 2, name: "karimjanov", surname: "omonbek", age: 22 },
  ]);

  // ✅ Yangi odam qo‘shish
  const createPerson = (newPerson) => {
    const newId = people.length ? people[people.length - 1].id + 1 : 1;
    setPeople([...people, { id: newId, ...newPerson }]);
  };

  // ✅ Odam ma'lumotlarini yangilash
  const updatePerson = (id, updatedData) => {
    setPeople(
      people.map((person) =>
        person.id === id ? { ...person, ...updatedData } : person
      )
    );
  };

  // ✅ Odamni o‘chirish
  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return { people, createPerson, updatePerson, deletePerson };
};

export default usePeople;