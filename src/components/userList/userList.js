import Card from '../UI/Card';
import UserListItem from './userListItem';

const UserList = (props) => {
  return (
    <Card>
      {props.users.map((user) => (
        <UserListItem key={user.username} user={user} />
      ))}
    </Card>
  );
}

export default UserList;
