import css from './SuccessMessage.module.css';

function SuccessMessage (props) {
    return (
            <h3 className={css.success}>{props.message}</h3>
    );
}

export default SuccessMessage;