import Button from './Button';

const Modal = (props) => {
  return (
    <div>
      <div>{props.text}</div>
      <Button type='button' onClick={props.onCancel}>Cancel</Button>
    </div>
  )
}

export default Modal;
