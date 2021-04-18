import './Main.css';
import TextArea from '../TextArea/TextArea';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__titile">Задачи</h2>
        <Button variant="menu" />
      </div>
      <TodoList />
      <TextArea />
      <div className="main__container">
        <Button variant="text" text="Добавить" />
        <Button variant="close" />
        <Button variant="menu" />
      </div>
    </main>
  );
}

export default Main;
