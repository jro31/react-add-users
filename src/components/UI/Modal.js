import Button from './Button';

import styles from './Modal.module.css';


const Modal = (props) => {
  const handleModalClick = (event) => (event.target.className.includes(styles['modal-container']) && props.onCancel());

  return (
    <div className={styles['modal-container']} onClick={handleModalClick}>
      <div className={styles.modal}>
        <div className={styles['heading-container']}>
          <h1>Invalid input</h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles.text}>{props.text}</div>
          <Button classNames={[styles.button]} type='button' onClick={props.onCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
