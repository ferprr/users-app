import styles from "./User.module.css";

//Informações de cada user (tipo expenseItem)
const User = (props) => {
  return (
    <div className={styles.user}>
      {props.username} ({props.age} years old).
    </div>
  );
};

export default User;
