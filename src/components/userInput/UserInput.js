import { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import styles from './UserInput.module.css';

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [ageIsValid, setAgeIsValid] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const usernameChangeHandler = (event) => {
    setUsernameIsValid(() => (valueExists(event.target.value) && usernameIsUnique(event.target.value)));
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeIsValid(() => (valueExists(event.target.value) && event.target.value > 0));
    setEnteredAge(event.target.value);
  };

  const valueExists = (value) => (value.trim().length > 0);
  const usernameIsUnique = (username) => (!props.existingUserNames.includes(username.toLowerCase()));

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (usernameIsValid && ageIsValid) {
      const newUser = { username: enteredUsername, age: enteredAge };
      props.onAddUser(newUser);
      setEnteredUsername('');
      setEnteredAge('');
      return;
    };

    showModal();
  };

  const showModal = () => {
    setModalText(() => {
      if (!usernameIsValid && !ageIsValid) {
        return 'Please enter a valid name and age';
      } else if (!ageIsValid) {
        return 'Age must be a positive number';
      } else if (!usernameIsValid && !usernameIsUnique(enteredUsername)) {
        return 'Username has already been taken';
      } else if (!usernameIsValid) {
        return 'Username is not valid';
      } else {
        return 'Dunno WTF is going on right now'
      }
    });
    setDisplayModal(true);
  };

  const hideModal = () => (setDisplayModal(false));

  return (
    <Card>
      <form className={styles['form-element']} onSubmit={formSubmitHandler}>
        <div className={styles['input-container']}>
          <label>Username</label>
          <input type='text' value={enteredUsername} onChange={usernameChangeHandler}></input>
        </div>
        <div className={styles['input-container']}>
          <label>Age (years)</label>
          <input type='number' value={enteredAge} onChange={ageChangeHandler}></input>
        </div>
        <div>
          <Button type='submit'>Add User</Button>
        </div>
        {displayModal && <Modal text={modalText} onCancel={hideModal} />}
      </form>
    </Card>
  )
}

export default UserInput;
