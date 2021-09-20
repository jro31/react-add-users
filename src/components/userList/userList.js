import Card from '../UI/Card';
import UserListItem from './UserListItem';
import styles from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card classNames={[styles['user-list']]}>
      {props.users.map((user) => (
        <UserListItem key={user.username} user={user} />
      ))}
    </Card>
  );
}

export default UserList;
