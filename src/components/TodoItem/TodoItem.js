import './TodoItem.css';
import Button from '../Button/Button';
import { useState } from 'react';

function TodoItem({ unit, onDeleteClick, handleItemClick }) {

  const [isCompleted, setCompleted] = useState(false);

  const handleCheckboxChenge = (evt) => {
    setCompleted(evt.target.checked);
  }

  return (
    <div className="wrapper">
      <input onChange={handleCheckboxChenge} type="checkbox" className="todo-item__checkbox" />
      <li onClick={() => handleItemClick(unit)} className={`todo-item ${isCompleted && 'todo-item_completed'}`}>
        <p className={`todo-item__unit ${isCompleted && 'todo-item__unit_completed'}`}>{unit.title}</p>
      </li>
      <Button event={() => onDeleteClick(unit.id)} variant="delete" />
    </div>
  );
}

export default TodoItem;