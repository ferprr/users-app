import Card from "../UI/Card";
import styles from './UsersList.module.css';
import User from './User';

//Renderiza usuários
const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <User username={user.username} age={user.age}/>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
