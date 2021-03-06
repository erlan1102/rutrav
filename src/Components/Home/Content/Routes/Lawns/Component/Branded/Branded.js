import React from 'react';
import './Branded.css'
import {Link} from "react-router-dom";
import SortItem from "../../SortItem/SortItem";
import SortNav from "../../SortItem/SortNav";

const Branded = () => {
    return (
        <section className='route__content'>
            <SortNav title='Фирменные газонные травосмеси'/>
            <div className="container">
                <div className='branded__items'>
                    <div className='branded__item1'>
                        <Link to='/branded/cottage' className='branded__text'>ДЛЯ ЗАГОРОДНОГО И КОТТЕДЖНОГО ОЗЕЛЕНЕНИЯ</Link>
                    </div>
                    <div className='branded__item2'>
                        <Link to='/branded/undersized' className='branded__text'>низкорослые газоны</Link>
                    </div>
                    <div className='branded__item3'>
                        <Link to='/branded/sports' className='branded__text'>Спортивные газоны</Link>
                    </div>
                    <div className='branded__item4'>
                        <Link to='/branded/universal' className='branded__text'>Универсальные травосмеси</Link>
                    </div>
                    <div className='branded__item5'>
                        <Link to='/branded/noryegrass' className='branded__text'>Газоны без райграса</Link>
                    </div>
                    <div className='branded__item6'>
                        <Link to='/branded/shade-tolerant' className='branded__text'>Теневыносливые газоны</Link>
                    </div>
                    <div className='branded__item7'>
                        <Link to='/branded/urban' className='branded__text'>ДЛЯ ГОРОДСКОГО ОЗЕЛЕНЕНИЯ И СЛУЖБ ЖКХ</Link>
                    </div>
                    <div className='branded__item8'>
                        <Link to='/branded/roadside' className='branded__text'>ДЛЯ ПРИДОРОЖНОГО ОЗЕЛЕНЕНИЯ</Link>
                    </div>
                    <div className='branded__item9'>
                        <Link to='/branded/fly' className='branded__text'>Для взлетных и посадочных полос</Link>
                    </div>
                    <div className='branded__item10'>
                        <Link to='/branded/north' className='branded__text'>Для северных регионов</Link>
                    </div>
                    <div className='branded__item11'>
                        <Link to='/branded/south' className='branded__text'>ДЛЯ ЮЖНЫХ РЕГИОНОВ</Link>
                    </div>
                    <div className='branded__item12'>
                        <Link to='/branded/reclamation' className='branded__text'>ДЛЯ БИОЛОГИЧЕСКОЙ РЕКУЛЬТИВАЦИИ ЗЕМЕЛЬ</Link>
                    </div>
                    <div className='branded__item13'>
                        <Link to='/branded/unpretentious' className='branded__text'>НЕПРИХОТЛИВЫЕ ГАЗОНЫ</Link>
                    </div>
                    <div className='branded__item14'>
                        <Link to='/branded/stalls' className='branded__text'>Партерные газоны</Link>
                    </div>
                    <div className='branded__item15'>
                        <Link to='/order' className='branded__text'>НА ЗАКАЗ ПО ВАШЕМУ СОСТАВУ</Link>
                    </div>
                </div>
                <SortItem path='branded'/>
            </div>
        </section>
    );
};

export default Branded;