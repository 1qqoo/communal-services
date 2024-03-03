import React from 'react';
import './Footer.css';

import vk from '../../images/vk.svg';
import tg from '../../images/tg.svg';
import inst from '../../images/insta.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <a
            className="footer__link"
            href="#pot"
          >
            &#169; https://your-site.ru
          </a>
          <p className="footer__text"> Все права защищены.</p>
          <p className="footer__text">
            Копирование материалов только по письменному разрешению.
          </p>
        </div>
        <div className="footer__navigation">
          <p className="footer__text">Мы онлайн:</p>
          <div className="footer__box">
            <img
              className="footer__icon"
              src={vk}
              alt="Вк"
            />
            <img
              className="footer__icon"
              src={tg}
              alt="Телеграм"
            />
            <img
              className="footer__icon"
              src={inst}
              alt="Инстаграм"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
