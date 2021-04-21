import './Button.css';
import closeImg from '../../images/close.svg';
import deleteImg from '../../images/delete.svg';

function Button({ text, variant, event, visible }) {
  return (
    <button onClick={event}
      className={`button
        ${variant === 'text' && 'button_variant_text button_visible'}
        ${variant === 'close' && `button_variant_close ${visible && 'button_visible'}`}
        ${variant === 'delete' && 'button_variant_delete button_visible'}
      `}
      type="button"
    >
      {text}
      {variant === 'close' ? (
        <img className="button_variant_close" src={closeImg} alt="Закрыть" />
      ) : null}
      {variant === 'delete' ? (
        <img className="button_variant_delete" src={deleteImg} alt="Удалить" />
      ) : null}
    </button>
  );
}

export default Button;
