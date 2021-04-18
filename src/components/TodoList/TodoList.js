import { useState, useEffect } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import api from '../../utils/api';

function TodoList() {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    api
      .getUnits()
      .then((data) => {
        setUnits(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul className="todo-list">
      {units.map((unit) => (
        <TodoItem unit={unit} key={unit.id} />
      ))}
    </ul>
  );
}

export default TodoList;
