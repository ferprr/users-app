import { useState } from "react";
import "./App.css";
import UserForm from "./User/UserForm";
import UsersList from "./User/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredUser) => {
    const user = {
      ...enteredUser,
      id: Math.random(),
    };

    console.log(user);

    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler}/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
