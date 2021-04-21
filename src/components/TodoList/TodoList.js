import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import Loader from '../Loader/Loader';

function TodoList({ units, loading, onDeleteClick, handleItemClick }) {
  return (
    <ul className="todo-list">
      {loading && <Loader />}
      {units.map((unit, i) => (
        <TodoItem
          unit={unit}
          onDeleteClick={onDeleteClick}
          handleItemClick={handleItemClick}
          key={i}
        />
      ))}
    </ul>
  );
}

export default TodoList;
