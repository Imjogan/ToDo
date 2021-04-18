import './TodoItem.css';
import Button from '../Button/Button';

function TodoItem({unit}) {
  return (
    <li className="todo-item">
      <p className="todo-item__unit">
        {unit.title}
      </p>
      <Button variant="delete" />
    </li>
  );
}

export default TodoItem;
