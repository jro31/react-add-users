import { useState } from 'react';

import UserInput from './components/userInput/UserInput';
import UserList from './components/userList/userList';

const App = () => {
  const [users, setUsers] = useState([
    { username: 'Jesus', age: 2021 },
    { username: 'Jethro', age: 36 }
  ]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ username: newUser.username, age: newUser.age });
      return updatedUsers;
    })
  }

  const existingUserNames = () => (users.map((user) => (user.username.toLowerCase())));

  return (
    <div>
      <UserInput onAddUser={addUserHandler} existingUserNames={existingUserNames()} />
      <UserList users={users} />
    </div>
  );
}

export default App;
