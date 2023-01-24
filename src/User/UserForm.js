import { useState } from "react";
import ErrorModal from "../Error/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

//Formulário para adicionar user
const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

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
      setError({
        title: "Invalid input",
        message: "Please enter a non-empty value.",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}

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
