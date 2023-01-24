import Card from "../UI/Card";
import User from './User';
import styles from './UsersList.module.css';

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
