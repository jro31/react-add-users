import styles from './UserListItem.module.css';

const UserListItem = (props) => {
  return (
    <div className={styles['content-container']}>
      <div>{props.user.username}</div>
      <div>{`(${props.user.age} years old)`}</div>
    </div>
  )
}

export default UserListItem;
