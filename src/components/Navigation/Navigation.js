import React, { useEffect, useState } from 'react';
import './Navigation.css';

export default function Navigation() {

    const[isActive1, setIsActive1] = useState(false);
    const[isActive2, setIsActive2] = useState(false);
    const[isActive3, setIsActive3] = useState(false);

    const[windowScroll, setWindowScroll] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setWindowScroll(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function toggleActive(checkboxNumber) {
        if(checkboxNumber === 1) {
            setIsActive1(prev => !prev);
            setIsActive2(false);
            setIsActive3(false);
        } else if (checkboxNumber === 2) {
            setIsActive1(false);
            setIsActive2(prev => !prev);
            setIsActive3(false);
        } else {
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(prev => !prev);
        }
    }

    return (
        <section className={`navigation ${windowScroll > 106 ? 'navigation_type_fixed' : ''}`}>
            <h1 className='navigation__title'>"КОМФОРТЖИЛСЕРВИС" управляющая компания</h1>
            <div className='navigation__box'>
                <ul className='navigation__links'>
                    <li>Главная</li>
                    <li>Новости</li>
                </ul>
                <div className='navigation__container'>
                    <input id='menu' type='checkbox' checked={isActive1} onChange={() => {toggleActive(1)}} />
                    <label htmlFor='menu' className='navigation__menu-container navigation__menu-container_type_first'>О компании <span>&#9205;</span></label>
                    <ul className='navigation__menu navigation__menu_type_first'>
                        <li>Адреса и контакты</li>
                        <li>Документы</li>
                    </ul>
                </div>
                <div className='navigation__container2'>
                    <input id='menu2' type='checkbox' checked={isActive2} onChange={() => {toggleActive(2)}} />
                    <label htmlFor='menu2' className='navigation__menu-container navigation__menu-container_type_second'>Жителям <span>&#9205;</span></label>
                    <ul className='navigation__menu navigation__menu_type_second'>
                        <li>Электронное обращение</li>
                        <li>Запись на прием</li>
                        <li>График приема населения</li>
                        <li>Тарифы</li>
                    </ul>
                </div>
                <div className='navigation__container3'>
                    <input id='menu3' type='checkbox' checked={isActive3} onChange={() => {toggleActive(3)}} />
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
