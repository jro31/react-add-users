import { useState } from 'react';

import Button from '../UI/Button';

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newUser = { username: enteredUsername, age: enteredAge };
    props.onAddUser(newUser);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input type='text' value={enteredUsername} onChange={usernameChangeHandler}></input>
      </div>
      <div>
        <label>Age (years)</label>
        <input type='number' value={enteredAge} onChange={ageChangeHandler}></input>
      </div>
      <div>
        <Button type='submit'>Add User</Button>
      </div>
    </form>
  )
}

export default UserInput;
