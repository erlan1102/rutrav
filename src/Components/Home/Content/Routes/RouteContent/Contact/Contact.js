import React from 'react';
import {Link} from "react-router-dom";
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className='route__nav'>
                    <Link className='route__link' to='/'>Главная </Link>
                    <span className='route__link-arrow'> </span>
                    <span className='route__nav-text'>Контакты</span>
                </div>
                <div className="route__info">
                    <p className='route__title'>ООО «Агрофирма Русские Травы»</p>
                    <p className='route__text'>Работа по безналичному расчету с организациями на общей системе налогообложения.</p>
                    <p className='route__span'>ОГРН:<span className='route__text'>1157746253257</span></p>
                    <p className='route__span'>ИНН:<span className='route__text'>7713393212</span></p>
                    <p className='route__subtitle'>Контакты:</p>
                    <p className='route__span'>Время работы: <span className='route__text'>будние дни с 9-00 до 16-30.</span></p>
                    <p className='route__span'>Адрес офиса: <span className='route__text'>127550, Россия, Москва, улица Прянишникова, 19А с4, офис 74.</span></p>
                    <p className='route__span'>Отдел продаж:</p>
                    <p className='route__span'>
                        Телефон:
                        <a className='route__tel' href="tel:+7 (495) 777-90-87"> +7 (495) 777-90-87</a>
                        <span className='route__span'> (многоканальный)</span>
                    </p>
                    <p className='route__span'>
                        E-mail:
                        <a className='route__mail' href="mailto:info@rutrav.ru"> info@rutrav.ru</a>
                    </p>
                    <p className='route__span'>Отдел оптовых продаж:</p>
                    <p className='route__span'>
                        Телефон:
                        <a className='route__tel' href="tel:+7 (495) 777-90-87"> +7 (495) 777-90-87</a>
                        <span className='route__span'> (многоканальный)</span>
                    </p>
                    <p className='route__span'>
                        E-mail:
                        <a className='route__mail' href="mailto:info@rutrav.ru"> info@rutrav.ru</a>
                    </p>
                    <p className='route__span'>Отдел интернет заказов:</p>
                    <p className='route__span'>
                        Телефон:
                        <a className='route__tel' href="tel:+7 (926) 526-26-16"> +7 (926) 526-26-16</a>
                    </p>
                    <p className='route__span'>
                        E-mail:
                        <a className='route__mail' href="mailto:info@rutrav.ru"> info@rutrav.ru</a>
                    </p>
                    <p className='route__span'>Отдел закупок:</p>
                    <p className='route__span'>
                        Телефон:
                        <a className='route__tel' href="tel:+7 (495) 507-87-80"> +7 (495) 507-87-80</a>
                    </p>
                    <p className='route__span'>
                        E-mail:
                        <a className='route__mail' href="mailto:info@rutrav.ru"> info@rutrav.ru</a>
                    </p>
                    <p className='route__subtitle'>Адреса складов:</p>
                    <div>
                        <p className='route__address'>1. 125438, Россия, Москва, Автомоторная улица, 5Бс3</p>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A84707a0319443bd499d85ef8ec3994b776e8be5d8d8e07a3718d3032ae8c1430&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
                    </div>
                    <div>
                        <p className='route__address'>2. Россия, Московская область, Можайский городской округ, деревня Шаликово, Партизанская улица, 61</p>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8e52ed9bdf2c221a754aee04e6b4821690beeda8dfb6daa909634b0aae51770e&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
                    </div>
                    <p className='route__span'>Связаться с руководством: <a className='route__mail' href="mailto:rustrav@mail.ru">rustrav@mail.ru</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;