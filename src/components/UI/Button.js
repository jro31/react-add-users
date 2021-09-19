const Button = (props) => {
  const handleClick = () => (props.onClick && props.onClick());

  return (
    <button type={props.type} onClick={handleClick}>{props.children}</button>
  )
}

export default Button;
