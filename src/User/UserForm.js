import { useState } from "react";
import ErrorModal from "../Error/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

//Formulário para adicionar user
const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    const userData = {
      username: username,
      age: age,
    };

    props.onAddUser(userData);

    setUsername("");
    setAge("");
  };

  return (
    <div>
      <ErrorModal title="An error occured" message="username or age invalid" />
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            min={1}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
