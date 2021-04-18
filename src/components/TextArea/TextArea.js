import './TextArea.css';

function TextArea({ visible }) {
  return (
    <textarea
      placeholder="Добавить задачу..."
      name="text-area"
      className={`text-area ${visible && 'text-area_visible'}`}
    ></textarea>
  );
}

export default TextArea;
