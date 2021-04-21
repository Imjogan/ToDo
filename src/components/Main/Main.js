import './Main.css';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';
import api from '../../utils/api';
import { useState, useEffect } from 'react';

function Main() {
  const [visibleArea, setVisibleArea] = useState(false);
  const [areaValue, setAreaValue] = useState('');
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateItem, setUpdateItem] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

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

  const handleChange = (evt) => {
    setAreaValue(evt.target.value);
  };

  const onDeleteClick = (id) => {
    setUnits(units.filter(unit => unit.id !== id));
  };

  function updateState(newTitle) {
    return units.map((el) => {
      if (el.id === currentCard.id) {
        return {
          ...el,
          title: newTitle,
        };
      }
      return el;
    });
  }

  const onClickButtonAdd = () => {
    setAreaValue('');
    setVisibleArea(!visibleArea);
    if (visibleArea && !updateItem) {
      areaValue.length > 0
        ? setUnits([
            ...units,
            { title: areaValue, id: units.length + 1 },
          ])
        : setVisibleArea(false);
    } else if (visibleArea && updateItem) {
      setUnits(updateState(areaValue));
    }
    setUpdateItem(false);
  }

  const handleItemClick = (unit) => {
    setVisibleArea(true);
    setAreaValue(unit.title);
    setCurrentCard(unit);
    setUpdateItem(true);
  }

  function onClickClose() {
    setVisibleArea(false);
    setAreaValue('');
    setUpdateItem(false);
  }

  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__titile">Задачи</h2>
        <Button variant="menu" />
      </div>
      <TodoList units={units} loading={loading} onDeleteClick={onDeleteClick} handleItemClick={handleItemClick} />
      <textarea
        placeholder="Добавить задачу..."
        name="text-area"
        className={`main__text-area ${visibleArea && 'main__text-area_visible'}`}
        value={areaValue}
        onChange={handleChange}
        minLength="3"
      />
      <div className="main__container">
        <Button event={onClickButtonAdd} variant="text" text="Добавить" />
        <Button event={onClickClose} variant="close" />
        <Button variant="menu" />
      </div>
    </main>
  );
}

export default Main;
