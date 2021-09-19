import styles from './Button.module.css';

const Button = (props) => {
  const handleClick = () => (props.onClick && props.onClick());

  return (
    <button
      className={`${styles.button} ${props.classNames && props.classNames.join(' ')}`}
      type={props.type}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}

export default Button;
