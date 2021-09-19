const UserListItem = (props) => {
  return (
    <div>
      {props.user.username}
      {props.user.age}
    </div>
  )
}

export default UserListItem;
