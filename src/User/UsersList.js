import Card from "../UI/Card";
import styles from './UsersList.module.css';
import User from './User';

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} username={user.username} age={user.age}/>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
