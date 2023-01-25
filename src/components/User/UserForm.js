import { useState } from "react";
import ErrorModal from "../Error/ErrorModalPortal";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  // const nameInputRef = useRef();
  // const ageInputRef = useRef();

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
    // const enteredName = nameInputRef.current.value;
    // const enteredAge = ageInputRef.current.value;

    //console.log(enteredName);

    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a non-empty value.",
      });
      return;
    }

    // if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: "Invalid input",
    //     message: "Please enter a non-empty value.",
    //   });
    //   return;
    // }

    const userData = {
      username: username,
      age: age,
    };

    props.onAddUser(userData);

    // nameInputRef.current.value = '';
    // ageInputRef.current.value = '';

    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            //ref={nameInputRef}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            //ref={ageInputRef}
            min={1}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
