import React from 'react';
import './Catalog.css';
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <div className='catalog'>
            <div className="container">
                <div className='catalog__info'>
                    <Link to='/branded' className='catalog__list-title'>Фирменные и газонные травосмеси</Link>
                    <ul className='catalog__list'>
                        <li><Link className='catalog__list-item' to='/cottage'>Для загородного и котеджного озеленения</Link></li>
                        <li><Link className='catalog__list-item' to='/undersized'>Низкорослые газоны</Link></li>
                        <li><Link className='catalog__list-item' to='/sports'>Спортивные газоны</Link></li>
                        <li><Link className='catalog__list-item' to='/universal'>Универсальные травосмеси</Link></li>
                        <li><Link className='catalog__list-item' to='/noryegrass'>Газоны без райграса</Link></li>
                        <li><Link className='catalog__list-item' to='/shade-tolerant'>Теневыносливые газоны</Link></li>
                        <li><Link className='catalog__list-item' to='/urban'>Газоны и травосмеси для городского озелениения и служб ЖКХ</Link></li>
                        <li><Link className='catalog__list-item' to='/roadside'>Травосмеси для придорожного озеленения</Link></li>
                        <li><Link className='catalog__list-item' to='/fly'>Для взлетных и посадочных полос</Link></li>
                        <li><Link className='catalog__list-item' to='/north'>Для северных регионов</Link></li>
                        <li><Link className='catalog__list-item' to='/south'>Для южных регионов</Link></li>
                        <li><Link className='catalog__list-item' to='/reclamation'>Для биологической рекультивации земель</Link></li>
                        <li><Link className='catalog__list-item' to='/unpretentious'>Неприхотливые газоны</Link></li>
                        <li><Link className='catalog__list-item' to='/stalls'>Партерные газоны</Link></li>
                    </ul>
                    <Link to='/cheap' className='catalog__list-title'>Дешевые травосмеси</Link>
                </div>

            </div>
        </div>
    );
};
//catalog__list-item

export default Catalog;