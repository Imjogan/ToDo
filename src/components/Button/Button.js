import './Button.css';
import closeImg from '../../images/close.svg';
import dotsImg from '../../images/dott.svg';
import deleteImg from '../../images/delete.svg';

function Button({ text, variant, event }) {
  return (
    <button onClick={event}
      className={`button
        ${variant === 'text' ? 'button_variant_text' : null}
        ${variant === 'close' ? 'button_variant_close' : null}
        ${variant === 'menu' ? 'button_variant_menu' : null}
        ${variant === 'delete' ? 'button_variant_delete' : null}
      `}
      type="button"
    >
      {text}
      {variant === 'close' ? (
        <img className="button_variant_close" src={closeImg} alt="Закрыть" />
      ) : null}
      {variant === 'menu' ? (
        <img className="button_variant_menu" src={dotsImg} alt="Меню" />
      ) : null}
      {variant === 'delete' ? (
        <img className="button_variant_delete" src={deleteImg} alt="Удалить" />
      ) : null}
    </button>
  );
}

export default Button;
