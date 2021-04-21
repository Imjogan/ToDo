import './Main.css';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';
import Select from '../Select/Select';
import api from '../../utils/api';
import { useState, useEffect } from 'react';

function Main() {
  const [visibleArea, setVisibleArea] = useState(false);
  const [areaValue, setAreaValue] = useState('');
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateItem, setUpdateItem] = useState(false);
  const [isCloseVisible, setCloseVisible] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [addButtonName, setAddButtonName] = useState('Добавить');
  const [selectedOption, setSelectedOption] = useState('В конец');

  const optionsForCreate = ['В начало', 'В конец'];

  useEffect(() => {
    api
      .getUnits()
      .then((data) => {
        setTimeout(() => {
          setUnits(data);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (evt) => {
    setAreaValue(evt.target.value);
  };

  const onDeleteClick = (id) => {
    setVisibleArea(false);
    setAreaValue('');
    setUnits(units.filter((unit) => unit.id !== id));
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
    setCloseVisible(!isCloseVisible);
    setAreaValue('');
    setVisibleArea(!visibleArea);
    if (visibleArea && !updateItem) {
      areaValue.length > 0
        ? setUnits(
            selectedOption === 'В конец'
              ? [...units, { title: areaValue, id: units.length + 1 }]
              : [{ title: areaValue, id: units.length + 1 }, ...units]
          )
        : setVisibleArea(false);
    } else if (visibleArea && updateItem) {
      setUnits(updateState(areaValue));
      setAddButtonName('Добавить');
    }
    setUpdateItem(false);
  };

  const handleItemClick = (unit) => {
    setCloseVisible(true);
    setAddButtonName('Обновить');
    setVisibleArea(true);
    setAreaValue(unit.title);
    setCurrentCard(unit);
    setUpdateItem(true);
  };

  function onClickClose() {
    setAddButtonName('Добавить');
    setVisibleArea(false);
    setAreaValue('');
    setUpdateItem(false);
    setCloseVisible(false);
  }

  const handleItemOnSelectClick = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__titile">Задачи</h2>
      </div>
      <TodoList
        units={units}
        loading={loading}
        onDeleteClick={onDeleteClick}
        handleItemClick={handleItemClick}
      />
      <textarea
        placeholder="Добавить задачу..."
        name="text-area"
        className={`main__text-area ${
          visibleArea && 'main__text-area_visible'
        }`}
        value={areaValue}
        onChange={handleChange}
        minLength="3"
      />
      <div className="main__container">
        <Button event={onClickButtonAdd} variant="text" text={addButtonName} />
        <Button visible={isCloseVisible} event={onClickClose} variant="close" />
        <Select
          options={optionsForCreate}
          selectedOption={selectedOption}
          selected={handleItemOnSelectClick}
        />
      </div>
    </main>
  );
}

export default Main;
