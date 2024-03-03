import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section
      id="Intro"
      className="intro"
    >
      <div className="intro__container">
        <ul className="intro__lists">
          <li className="intro__list">
            <h2 className="intro__list-title">Опыт</h2>
            <p className="intro__list-paragraph">
              Опыт управления многоквартирными домами с 2014 года, позволяет с
              уверенностью называть нашу команду - командой профессионалов.
            </p>
          </li>
          <li className="intro__list">
            <h2 className="intro__list-title">Прозрачность</h2>
            <p className="intro__list-paragraph">
              Все просто, прозрачно и понятно как 2*2! Мы управляем
              многоквартирными домами по Договорам управления, расчеты за
              потребляемые услуги, производятся ООО "МособолЕИРЦ", а прямые
              договора, позволяют решать вопросы с поставщиками, минуя
              управляющую компанию.
            </p>
          </li>
          <li className="intro__list">
            <h1 className="intro__list-title">Открытость и доступность</h1>
            <p className="intro__list-paragraph">
              Вся актуальная информация - здесь и сейчас. Вы можете легко найти
              интересующую вас информацию. Воспользуйтесь навигационным меню.
              <span className="intro__list-span"> Остались вопросы?</span>{' '}
              <br></br>
              Оставьте свое обращение в компанию онлайн или генеральному
              директору.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
