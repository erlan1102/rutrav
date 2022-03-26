import React from 'react';
import './Catalog.css'
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <div className='catalog'>
            <div className="container">
                <div className='oops'>
                    <div className='catalog__info'>
                        <Link to='/branded' className='catalog__list-title'>Фирменные и газонные травосмеси</Link>
                        <ul className='catalog__list'>
                            <li><Link className='catalog__list-item' to='/branded/cottage'>Для загородного и котеджного озеленения</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/undersized'>Низкорослые газоны</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/sports'>Спортивные газоны</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/universal'>Универсальные травосмеси</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/noryegrass'>Газоны без райграса</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/shade-tolerant'>Теневыносливые газоны</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/urban'>Газоны и травосмеси для городского озелениения и служб ЖКХ</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/roadside'>Травосмеси для придорожного озеленения</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/fly'>Для взлетных и посадочных полос</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/north'>Для северных регионов</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/south'>Для южных регионов</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/reclamation'>Для биологической рекультивации земель</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/unpretentious'>Неприхотливые газоны</Link></li>
                            <li><Link className='catalog__list-item' to='/branded/stalls'>Партерные газоны</Link></li>
                            <li><Link className='catalog__list-item' to='/order'>Травосмесь на заказ</Link></li>
                        </ul>
                        <Link to='/cheap' className='catalog__list-title'>Дешевые травосмеси</Link>
                    </div>
                    <div className='catalog__info'>
                        <Link to='/perennial' className='catalog__list-title'>Семена многолетних трав (отдельные виды)</Link>
                        <ul className='catalog__list'>
                            <li><Link className='catalog__list-item' to='/perennial/bluegrass'>Мятлик</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/oatmeal'>Овсяница</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/ryegrass'>Райграс</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/clover'>Клевер (ползучий, луговой)</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/alfalfa'>Люцерна</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/pike'>Щучка дернистая</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/polevitsa'>Полевица</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/timofeevka'>Тимофеевка луговая</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/rump'>Кострец</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/festulolium'>Фестулолиум</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/hedgehog'>Ежа сборная</Link></li>
                            <li><Link className='catalog__list-item' to='/perennial/canary'>Канареечник (двукисточник)</Link></li>
                        </ul>
                        <Link to='/sowing' className='catalog__list-title'>Компоненты для гидропосева газона</Link>
                    </div>
                    <div className='catalog__info'>
                        <Link to='/fodder' className='catalog__list-title'>Фирменные кормовые травосмеси (для пастбищ и сенокоса)</Link>
                        <ul className='catalog__list'>
                            <li><Link className='catalog__list-item' to='/fodder/senokos'>Для сенокосного использования</Link></li>
                            <li><Link className='catalog__list-item' to='/fodder/combined'>Для комбинированного использования</Link></li>
                            <li><Link className='catalog__list-item' to='/fodder/pasture'>Для пастбищного использования</Link></li>
                            <li><Link className='catalog__list-item' to='/fodder/alfalfa'>Люцерна</Link></li>
                        </ul>
                        <Link to='/related' className='catalog__list-title'>Сопутствующие товары для газонов (удобрения, гербициды, укрывной материал)</Link>
                        <ul className='catalog__list'>
                            <li><Link className='catalog__list-item' to='/fertilizers'>Удобрения для газона</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;