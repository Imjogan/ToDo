import './TodoItem.css';
import Button from '../Button/Button';

function TodoItem({ unit, onDeleteClick, handleItemClick }) {

  return (
    <div className="wrapper">
      <li onClick={() => handleItemClick(unit)} className="todo-item">
        <p className="todo-item__unit">{unit.title}</p>
      </li>
      <Button event={() => onDeleteClick(unit.id)} variant="delete" />
    </div>
  );
}

export default TodoItem;