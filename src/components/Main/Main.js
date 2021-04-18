import './Main.css';
import TextArea from '../TextArea/TextArea';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';
import { useState } from 'react';

function Main() {
  const [visibleArea, setVisibleArea] = useState(false);

  const onClickButtonAdd = () => {
    setVisibleArea(!visibleArea);
  }

  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__titile">Задачи</h2>
        <Button variant="menu" />
      </div>
      <TodoList />
      <TextArea visible={visibleArea} />
      <div className="main__container">
        <Button event={onClickButtonAdd} variant="text" text="Добавить" />
        <Button variant="close" />
        <Button variant="menu" />
      </div>
    </main>
  );
}

export default Main;
