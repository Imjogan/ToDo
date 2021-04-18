import './TextArea.css';

function TextArea() {
  return (
    <textarea
      placeholder="Добавить задачу..."
      name="text-area"
      className="text-area">
    </textarea>
  );
}

export default TextArea;