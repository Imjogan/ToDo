import './TodoItem.css';
import Button from '../Button/Button';

function TodoItem({ unit, onDeleteClick, handleItemClick }) {

  return (
    <li onClick={() => handleItemClick(unit)} className="todo-item">
      <p className="todo-item__unit">{unit.title}</p>
      <Button event={() => onDeleteClick(unit.id)} variant="delete" />
    </li>
  );
}

export default TodoItem;