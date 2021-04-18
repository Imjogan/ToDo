import { useState, useEffect } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import Loader from '../Loader/Loader';
import api from '../../utils/api';

function TodoList() {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getUnits()
      .then((data) => {
        setTimeout(() => {
          setUnits(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul className="todo-list">
      {loading && <Loader />}
      {units.map((unit) => (
        <TodoItem unit={unit} key={unit.id} />
      ))}
    </ul>
  );
}

export default TodoList;
