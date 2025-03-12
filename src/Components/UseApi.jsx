import useApi from "../hook/usePeople";

const Users = () => {
  const { data, loading, error, createItem, updateItem, deleteItem } = useApi("users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => updateItem(user.id, { name: "Updated Name" })}>Edit</button>
            <button onClick={() => deleteItem(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => createItem({ name: "New User" })}>Add User</button>
    </div>
  );
};

export default Users;