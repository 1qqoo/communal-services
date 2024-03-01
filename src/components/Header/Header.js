import React from 'react';
import '../Header/Header.css';

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__content">
          <h1 className="header__title">ЕДИНАЯ ДИСПЕТЧЕРСКАЯ СЛУЖБА:</h1>
          <span className="header__span">+7 (499) 755 43 00</span>
        </div>

        <div className="header__content">
          <h1 className="header__title">Телефон офиса:</h1>
          <span className="header__span">+7 (499) 755 43 00</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
