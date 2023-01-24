import { useState } from "react";
import "./App.css";
import Wrapper from "./components/Helpers/Wrapper";
import UserForm from "./components/User/UserForm";
import UsersList from "./components/User/UsersList";

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
    <Wrapper>
      <UserForm onAddUser={addUserHandler}/>
      <UsersList users={users} />
    </Wrapper>
  );
}

export default App;
