import React from 'react';
import './Problems.css';
import banner from '../../images/banner1.png';

const Problems = () => {
  return (
    <section
      id="Problems"
      className="problems"
    >
      <div className="problems__container">
        <div className="problems__text">
          <h2 className="problems__text-title">
            В квитанциях ошибки, в подъезде мусор, сотрудники управляющей хамят?
          </h2>
          <p className="problems__text-paragraph">
            Расскажите о проблемах с ЖКХ
          </p>
          <button className="problems__button">Написать о проблеме</button>
        </div>
        <img
          className="problems__image"
          src={banner}
          alt="Инстаграм"
        />
      </div>
    </section>
  );
};

export default Problems;
