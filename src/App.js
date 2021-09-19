import { useState } from 'react';

import UserInput from './components/userInput/UserInput';
import UserList from './components/userList/userList';

const App = () => {
  const [users, setUsers] = useState([
    { username: 'Jesus', age: 2021 },
    { username: 'Jethro', age: 36 }
  ]);

  return (
    <div>
      <UserInput />
      <UserList users={users} />
    </div>
  );
}

export default App;
