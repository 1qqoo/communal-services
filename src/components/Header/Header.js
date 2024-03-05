import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <h2 className="header__title">Единая диспетчерская служба:</h2>
          <span className="header__span">+7 (499) 755 43 00</span>
        </div>

        <div className="header__content">
          <h2 className="header__title">Телефон офиса:</h2>
          <span className="header__span">+7 (499) 755 43 00</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
