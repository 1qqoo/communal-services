import React from 'react';
import './Navigation.css';

export default function Navigation() {
  return (
    <section className='navigation'>
        <h1 className='navigation__title'>"КОМФОРТЖИЛСЕРВИС" управляющая компания</h1>
        <div className='navigation__box'>
            <ul className='navigation__links'>
                <li>Главная</li>
                <li>Новости</li>
            </ul>
            <div className='navigation__container'>
                <input id='menu' type='checkbox' />
                <label htmlFor='menu' className='navigation__menu-container navigation__menu-container_type_first'>О компании <span>&#9205;</span></label>
                <ul className='navigation__menu navigation__menu_type_first'>
                    <li>Адреса и контакты</li>
                    <li>Документы</li>
                </ul>
            </div>
            <div className='navigation__container2'>
                <input id='menu2' type='checkbox' />
                <label htmlFor='menu2' className='navigation__menu-container navigation__menu-container_type_second'>Жителям <span>&#9205;</span></label>
                <ul className='navigation__menu navigation__menu_type_second'>
                    <li>Электронное обращение</li>
                    <li>Запись на прием</li>
                    <li>График приема населения</li>
                    <li>Тарифы</li>
                </ul>
            </div>
            <div className='navigation__container3'>
                <input id='menu3' type='checkbox' />
                <label htmlFor='menu3' className='navigation__menu-container navigation__menu-container_type_third'>Личный кабинет <span>&#9205;</span></label>
                <ul className='navigation__menu navigation__menu_type_third'>
                    <li>Личный кабинет МособлЕИРЦ</li>
                    <li>Личный кабинет ЕДС ЖКХ</li>
                    <li>MS MKD (для сотрудников)</li>
                </ul>
            </div>
        </div>
    </section>
  )
}
