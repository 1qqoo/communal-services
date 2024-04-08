import React from 'react';
import './Login.css';

import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <section className='login'>
            <div className='login__container'>
                <div className='login__info-container'>
                    <h1 className='login__title'>Добро пожаловать!</h1>
                    <p className='login__register'>Нет учетной записи ? Зарегестрируйтесь !</p>
                    <Link className='login__button login__button_type_register' to='/signup'>Регистрация</Link>
                </div>
                <div className='login__form-container'>
                    <p className='login__text'>Войти в учетную запись</p>
                    <form className='login__form'>
                        <div className='login__box'>
                            <input className='login__input' placeholder='E-mail'/>
                            <span className='login__span'></span>
                        </div>
                        <div className='login__box'>
                            <input className='login__input' placeholder='Пароль'/>
                            <span className='login__span'></span>
                        </div>
                        <button className='login__button login__button_type_login'>Войти</button>
                    </form>
                </div>
            </div>
        </section>    
    )
}
