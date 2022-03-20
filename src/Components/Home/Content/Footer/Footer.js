import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Logo from '../../../../Assets/logo/Logo.svg'
import './Footer.css'
import Visa from '../../../../Assets/Card/visa.png'
import Mastercard from '../../../../Assets/Card/mastercard.png'
import Wallet from '../../../../Assets/Card/wallet.png'
import Invoice from '../../../../Assets/Card/Invoice.png'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className='footer__row'>
                    <div className='footer__info'>
                        <Link to='/'><img src={Logo} alt="Logo"/></Link>
                        <p className='footer__logo-subtitle'>Copyright 2021 ©. Агрофирма Русские Травы. Все права защищены.</p>
                    </div>
                    <div className='footer__info'>
                        <p className='footer__info-title'>Информация</p>
                        <ul className='footer__list'>
                            <li className='footer__list-item'><NavLink to='/' className='footer__list-link'>Главная</NavLink></li>
                            <li className='footer__list-item'><NavLink to='/catalog' className='footer__list-link'>Каталог</NavLink></li>
                            <li className='footer__list-item'><NavLink to='/company' className='footer__list-link'>О компании</NavLink></li>
                            <li className='footer__list-item'><NavLink to='/payment' className='footer__list-link'>Оплата</NavLink></li>
                            <li className='footer__list-item'><NavLink to='/express' className='footer__list-link'>Доставка</NavLink></li>
                            <li className='footer__list-item'><NavLink to='/articles' className='footer__list-link'>Полезные статьи</NavLink></li>
                            <li className='footer__list-item'><NavLink to='/contact' className='footer__list-link'>Контакты</NavLink></li>
                        </ul>
                    </div>
                    <div className='footer__info'>
                        <p className='footer__info-title'>Способы оплаты</p>
                        <div className='footer__card'>
                            <img className='footer__card-img' src={Visa} alt="Visa"/>
                            <img className='footer__card-img' src={Mastercard} alt="Mastercard"/>
                            <img className='footer__card-img' src={Wallet} alt="Koshelek"/>
                            <img className='footer__card-img' src={Invoice} alt="Card"/>
                        </div>
                        <a className='footer__info-subtitle' href="https://old.zakupki.mos.ru/#/suppliers?s.innLike=7713393212&v.ps=10&v.s=id&v.sd" target='_blank'>Мы зарегистрированы на Портале поставщиков</a>
                    </div>
                    <div className='footer__info'>
                        <p className='footer__info-title'>Контакты</p>
                        <div className='footer__contact'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.21922 1H3C1.89543 1 1 1.89543 1 3V5C1 10.5228 5.47715 15 11 15H13C14.1046 15 15 14.1046 15 13V11.618C15 11.2393 14.786 10.893 14.4472 10.7236L12.0313 9.51564C11.487 9.24349 10.8278 9.51652 10.6354 10.0938L10.3376 10.9871C10.1447 11.5658 9.55118 11.9102 8.95309 11.7906C6.55929 11.3119 4.68814 9.44071 4.20938 7.04691C4.08976 6.44882 4.43422 5.85526 5.01286 5.66238L6.12149 5.29284C6.61721 5.1276 6.90214 4.60855 6.7754 4.10162L6.18937 1.75746C6.07807 1.3123 5.67809 1 5.21922 1Z" stroke="#E5E5E5"/>
                            </svg>
                            <a className='footer__contact-subtitle' href="tel:+7 (495) 777-90-87">+7 (495) 777-90-87</a>
                        </div>
                        <div className='footer__contact'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.21922 1H3C1.89543 1 1 1.89543 1 3V5C1 10.5228 5.47715 15 11 15H13C14.1046 15 15 14.1046 15 13V11.618C15 11.2393 14.786 10.893 14.4472 10.7236L12.0313 9.51564C11.487 9.24349 10.8278 9.51652 10.6354 10.0938L10.3376 10.9871C10.1447 11.5658 9.55118 11.9102 8.95309 11.7906C6.55929 11.3119 4.68814 9.44071 4.20938 7.04691C4.08976 6.44882 4.43422 5.85526 5.01286 5.66238L6.12149 5.29284C6.61721 5.1276 6.90214 4.60855 6.7754 4.10162L6.18937 1.75746C6.07807 1.3123 5.67809 1 5.21922 1Z" stroke="#E5E5E5"/>
                            </svg>
                            <a className='footer__contact-subtitle' href="tel:8 (800) 775-27-56">8 (800) 775-27-56</a>
                        </div>
                        <div className='footer__contact'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4L8 8L15 4M2 1H14C14.5523 1 15 1.44772 15 2V12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1 12.5523 1 12V2C1 1.44772 1.44772 1 2 1Z" stroke="#E5E5E5"/>
                            </svg>
                            <a className='footer__contact-subtitle' href="https://t.me/Gazon77Bot" target='_blank'>Gazon77Bot</a>
                        </div>
                        <div className='footer__contact'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 1L15.4596 1.19696C15.5401 1.00904 15.4981 0.791016 15.3536 0.646447C15.209 0.501877 14.991 0.45989 14.803 0.540427L15 1ZM1 7L0.80304 6.54043C0.630457 6.61439 0.513861 6.77881 0.501148 6.96614C0.488434 7.15348 0.581745 7.33214 0.742752 7.42875L1 7ZM9 15L8.57125 15.2572C8.66786 15.4183 8.84652 15.5116 9.03386 15.4989C9.22119 15.4861 9.38561 15.3695 9.45957 15.197L9 15ZM14.803 0.540427L0.80304 6.54043L1.19696 7.45957L15.197 1.45957L14.803 0.540427ZM0.742752 7.42875L5.74275 10.4287L6.25725 9.57125L1.25725 6.57125L0.742752 7.42875ZM5.57125 10.2572L8.57125 15.2572L9.42875 14.7428L6.42875 9.74275L5.57125 10.2572ZM9.45957 15.197L15.4596 1.19696L14.5404 0.80304L8.54043 14.803L9.45957 15.197ZM14.6464 0.646447L5.64645 9.64645L6.35355 10.3536L15.3536 1.35355L14.6464 0.646447Z" fill="#E5E5E5"/>
                            </svg>
                            <a className='footer__contact-subtitle' href="mailto:info@rutrav.ru" target='_blank'>info@rutrav.ru</a>
                        </div>
                        <div className='footer__contact'>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 8.99478C8.104 8.99478 9 8.09934 9 6.99606C9 5.89278 8.104 4.99738 7 4.99738C5.896 4.99738 5 5.89278 5 6.99606C5 8.09934 5.896 8.99478 7 8.99478Z" stroke="#E5E5E5"/>
                                <path d="M13 6.99606C13 11.9928 8 14.9909 7 14.9909C6 14.9909 1 11.9928 1 6.99606C1 3.68522 3.687 1 7 1C10.313 1 13 3.68522 13 6.99606Z" stroke="#E5E5E5"/>
                            </svg>
                            <a className='footer__contact-subtitle' href="https://goo.gl/maps/odWvsjzmy8idV5iB6" target='_blank'>г.Москва, ул. Прянишникова, 19А стр.4</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;