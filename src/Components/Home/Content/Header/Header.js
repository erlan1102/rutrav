import React,{useState, useEffect} from 'react';
import './Header.css'
import '../../../../style.css'
import Logo from '../../../../Assets/logo/Logo.svg'
import {Link, NavLink} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const [call, setCall] = useState(false);
    const [search, setSearch] = useState(false);
    const [all, setAll] = useState([]);
    const [searchVal, setSearchVal] = useState('');

    useEffect(()=> {
        axios('http://localhost:8080/all')
            .then(({data}) => setAll(Object.values(data)));
    },[]);

    const searchHandler = () => {
        setSearch(search);
    };

    return (
        <div className='header'>
            <div className='header__top'>
                <div className="container">
                    <div className="header__top-row">
                        <div className='header__left'>
                            <NavLink to='/company' className='header__left-title'>О компании</NavLink>
                            <NavLink to='/payment' className='header__left-title'>Оплата</NavLink>
                            <NavLink to='/express' className='header__left-title'>Доставка</NavLink>
                            <NavLink to='/articles' className='header__left-title'>Полезные статьи</NavLink>
                            <NavLink to='/contact' className='header__left-title'>Контакты</NavLink>
                        </div>
                        <div className='header__top-search'>
                            <input value={searchVal} className='header__top-input' type="text" placeholder='Поиск' onChange={(e)=> {
                                searchHandler(e.target.value);
                                setSearchVal(e.target.value)
                            }}/>
                            <ul className='header__list' style={{display: `${searchVal && all.length  ? 'flex' : 'none'}`}}>
                                {
                                    all.filter((item)=> item.title.toUpperCase().toLowerCase().includes(searchVal)).map((item,idx)=> (
                                    <li key={idx} className='header__list-item'>
                                        <div className='header__list-info'>
                                            <Link to={`${item.categories}/product/${item.id}`} className='header__list-title' onClick={searchVal}>
                                                <img className='header__list-img' src={item.imageUrl} alt=""/>
                                                <p className='header__list-title'>{item.title}</p>
                                                <p className='header__list-price'>от {item.price} ₽ / {item.packaging} уп</p>
                                            </Link>
                                        </div>
                                    </li>
                                    ))
                                }
                            </ul>
                            <span className='header__top-svg'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 15L11 11M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13Z" stroke="#2D3A3A"/></svg>
                            </span>
                        </div>
                        <div className='header__right'>
                            <p className='header__right-title'>Вход</p>
                            <p className='header__right-title'>Регистрация</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='header__middle'>
                    <Link to='/'><img className='header__middle-logo' src={Logo} alt="Logo"/></Link>
                    <div>
                        <p className='header__middle-text'>г.Москва, ул. Прянишникова, 19А стр.4</p>
                        <p className='header__middle-text'>Пн-Пт 9:00-18:00</p>
                    </div>
                    <div>
                        <div className='header__middle-contact'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4L8 8L15 4M2 1H14C14.5523 1 15 1.44772 15 2V12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1 12.5523 1 12V2C1 1.44772 1.44772 1 2 1Z" stroke="#2D3A3A"/>
                            </svg>
                            <a className='header__middle-data' href="https://t.me/Gazon77Bot" target='_blank'>Gazon77Bot</a>
                        </div>
                        <div className='header__middle-contact'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 1L15.4596 1.19696C15.5401 1.00904 15.4981 0.791016 15.3536 0.646447C15.209 0.501877 14.991 0.45989 14.803 0.540427L15 1ZM1 7L0.80304 6.54043C0.630457 6.61439 0.513861 6.77881 0.501148 6.96614C0.488434 7.15348 0.581745 7.33214 0.742752 7.42875L1 7ZM9 15L8.57125 15.2572C8.66786 15.4183 8.84652 15.5116 9.03386 15.4989C9.22119 15.4861 9.38561 15.3695 9.45957 15.197L9 15ZM14.803 0.540427L0.80304 6.54043L1.19696 7.45957L15.197 1.45957L14.803 0.540427ZM0.742752 7.42875L5.74275 10.4287L6.25725 9.57125L1.25725 6.57125L0.742752 7.42875ZM5.57125 10.2572L8.57125 15.2572L9.42875 14.7428L6.42875 9.74275L5.57125 10.2572ZM9.45957 15.197L15.4596 1.19696L14.5404 0.80304L8.54043 14.803L9.45957 15.197ZM14.6464 0.646447L5.64645 9.64645L6.35355 10.3536L15.3536 1.35355L14.6464 0.646447Z" fill="#2D3A3A"/>
                            </svg>
                            <a className='header__middle-data' href="mailto:info@rutrav.ru" target='_blank'>info@rutrav.ru</a>
                        </div>
                    </div>
                    <div>
                        <div className='header__middle-contact'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.21922 1H3C1.89543 1 1 1.89543 1 3V5C1 10.5228 5.47715 15 11 15H13C14.1046 15 15 14.1046 15 13V11.618C15 11.2393 14.786 10.893 14.4472 10.7236L12.0313 9.51564C11.487 9.24349 10.8278 9.51652 10.6354 10.0938L10.3376 10.9871C10.1447 11.5658 9.55118 11.9102 8.95309 11.7906C6.55929 11.3119 4.68814 9.44071 4.20938 7.04691C4.08976 6.44882 4.43422 5.85526 5.01286 5.66238L6.12149 5.29284C6.61721 5.1276 6.90214 4.60855 6.7754 4.10162L6.18937 1.75746C6.07807 1.3123 5.67809 1 5.21922 1Z" stroke="#2D3A3A"/>
                            </svg>
                            <a className='header__middle-data' href="tel:+7 (495) 777-90-87">+7 (495) 777-90-87</a>
                        </div>
                        <div>
                            <div className='header__middle-contact'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.21922 1H3C1.89543 1 1 1.89543 1 3V5C1 10.5228 5.47715 15 11 15H13C14.1046 15 15 14.1046 15 13V11.618C15 11.2393 14.786 10.893 14.4472 10.7236L12.0313 9.51564C11.487 9.24349 10.8278 9.51652 10.6354 10.0938L10.3376 10.9871C10.1447 11.5658 9.55118 11.9102 8.95309 11.7906C6.55929 11.3119 4.68814 9.44071 4.20938 7.04691C4.08976 6.44882 4.43422 5.85526 5.01286 5.66238L6.12149 5.29284C6.61721 5.1276 6.90214 4.60855 6.7754 4.10162L6.18937 1.75746C6.07807 1.3123 5.67809 1 5.21922 1Z" stroke="#2D3A3A"/>
                                </svg>
                                <a className='header__middle-data' href="tel:8 (800) 775-27-56">8 (800) 775-27-56</a>
                            </div>
                            <p className='header__middle-subtext'>(Звонок бесплатный)</p>
                        </div>
                    </div>
                    <button className='header__middle-btn' type='button' onClick={()=> setCall(!call)}>Заказать звонок</button>
                    <div className={`${call ? 'active' : ''} header__middle-form`}>

                    </div>
                </div>
            </div>
                <div className='header__bottom'>
                    <div className="container">
                        <div className="header__bottom-info">
                            <div className='header__bottom-text'>
                                <Link to='/catalog' className='header__bottom-catalog'>Каталог <span><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L13 1" stroke="white"/></svg></span>
                                </Link>
                                <NavLink to='/branded' className='header__bottom-title'>Фирменные газонные травосмеси</NavLink>
                                <NavLink to='/cheap' className='header__bottom-title'>Дешёвые травосмеси</NavLink>
                                <NavLink to='/order' className='header__bottom-title'>Травосмесь на заказ</NavLink>
                            </div>
                            <div className='header__basket'>
                                <span className='header__basket-svg'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.94898 14.898L3.39619 14.6743L3.39619 14.6743L2.94898 14.898ZM13.051 14.898L13.4982 15.1216L13.4982 15.1216L13.051 14.898ZM1.2032 6.5H14.7968V5.5H1.2032V6.5ZM14.5 6.2032V6.64196H15.5V6.2032H14.5ZM12.8859 14.5H3.11409V15.5H12.8859V14.5ZM1.5 6.64196V6.2032H0.5V6.64196H1.5ZM3.39619 14.6743C2.1492 12.1804 1.5 9.43031 1.5 6.64196H0.5C0.5 9.58555 1.18535 12.4887 2.50176 15.1216L3.39619 14.6743ZM3.11409 14.5C3.23356 14.5 3.34277 14.5675 3.39619 14.6743L2.50176 15.1216C2.61773 15.3535 2.85478 15.5 3.11409 15.5V14.5ZM12.6038 14.6743C12.6572 14.5675 12.7664 14.5 12.8859 14.5V15.5C13.1452 15.5 13.3823 15.3535 13.4982 15.1216L12.6038 14.6743ZM14.5 6.64196C14.5 9.43031 13.8508 12.1804 12.6038 14.6743L13.4982 15.1216C14.8147 12.4887 15.5 9.58555 15.5 6.64196H14.5ZM14.7968 6.5C14.6329 6.5 14.5 6.36712 14.5 6.2032H15.5C15.5 5.81483 15.1852 5.5 14.7968 5.5V6.5ZM1.2032 5.5C0.814831 5.5 0.5 5.81483 0.5 6.2032H1.5C1.5 6.36712 1.36712 6.5 1.2032 6.5V5.5ZM4.42875 6.25725L7.42875 1.25725L6.57125 0.742752L3.57125 5.74275L4.42875 6.25725ZM8.57125 1.25725L11.5713 6.25725L12.4287 5.74275L9.42875 0.742752L8.57125 1.25725Z" fill="white"/></svg>
                                </span>
                                <p className='header__basket-text'>В корзине: <span className='header__basket-money'>0 ₽</span></p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Header;