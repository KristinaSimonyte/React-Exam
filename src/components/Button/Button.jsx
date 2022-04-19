import css from './Button.module.css';

function Button(props) {
  const extraClass = props.outline ? css.outline : '';
  return (
    <button onClick={props.onClick} className={`${css.btn} ${extraClass}`}>
      {props.children}
    </button>
  );
}

export default Button;
