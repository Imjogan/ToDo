import './Loader.css';

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
    <div className="loader-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
