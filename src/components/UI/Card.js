import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.classNames && props.classNames.join(' ')}`}>{props.children}</div>
  )
}

export default Card;
