import React from 'react';
import './About.css';

import build from '../../images/build.svg';

export default function About() {
  return (
    <section className='about'>
        <div className='about__container'>
            <h2 className='about__title'>О компании</h2>
            <h3 className='about__subtitle'>Немного о нас</h3>
            <p className='about__text'>ООО "УК "КОМФОРТЖИЛСЕРВИС" оказывает услуги по управлению и обслуживанию жилых домов и коммерческой недвижимости с 2014 года. На данный момент в управлении организации находится 14 жилых дома, а это более 300 квартир.</p>
            <p className='about__text'>Главной целью нашей компании является профессиональное предоставление качественных коммунальных услуг жителям.</p>
            <div className='about__box'>
                <a href='#okay' className='about__link'>Подробнее</a>
            </div>
        </div>
        <img className='about__image' alt='Дома' src={build} />
    </section>
  )
}
