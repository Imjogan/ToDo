import React, { useState } from "react";
import './Select.css';
import menuImg from '../../images/dott.svg';

function Select({ options, selected, selectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <section onMouseLeave={close} className="select">
      <div className="select__wrapper">
        <div className="select__header" onMouseOver={open} >
          <img className="select__menu" src={menuImg} alt="Меню" />
        </div>
        {isOpen && (
          <div className="select__container">
            <div className="select__list">
              {options.map((option, i) => (
                <li
                  className={`select__list-item ${selectedOption === option && 'select__list-item__active'}`}
                  onClick={() => {
                    selected(option);
                    setIsOpen(false);
                  }} key={i}>
                  {option}
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Select;