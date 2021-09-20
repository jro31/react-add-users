import { useState } from 'react';

import UserInput from './components/userInput/UserInput';
import UserList from './components/userList/UserList';
import styles from './App.module.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ username: newUser.username, age: newUser.age });
      return updatedUsers;
    })
  }

  const existingUserNames = () => (users.map((user) => (user.username.toLowerCase())));

  return (
    <div className={styles['components-container']}>
      <UserInput onAddUser={addUserHandler} existingUserNames={existingUserNames()} />
      {users.length && <UserList users={users} />}
    </div>
  );
}

export default App;
