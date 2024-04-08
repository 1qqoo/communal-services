import React from 'react';
import './Register.css';

import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <section className='register'>
            <div className='register__container'>
                <div className='register__info-container'>
                    <h1 className='register__title'>Добро пожаловать!</h1>
                    <p className='register__login'>Уже зарегистрированы ? Войти !</p>
                    <Link className='register__button register__button_type_login' to='/signin'>Войти</Link>
                </div>
                <div className='register__form-container'>
                    <p className='register__text'>Создать учетную запись</p>
                    <form className='register__form'>
                        <div className='register__box'>
                            <input className='register__input' placeholder='Имя'/>
                            <span className='register__span'></span>
                        </div>
                        <div className='register__box'>
                            <input className='register__input' placeholder='E-mail'/>
                            <span className='register__span'></span>
                        </div>
                        <div className='register__box'>
                            <input className='register__input' placeholder='Пароль'/>
                            <span className='register__span'></span>
                        </div>
                        <button className='register__button register__button_type_register'>Регистрация</button>
                    </form>
                </div>
            </div>
        </section>    
    )
}
