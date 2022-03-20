import React from 'react';
import './Fodder.css'
import SortNav from "../SortItem/SortNav";
import {Link} from "react-router-dom";
import SortItem from "../SortItem/SortItem";

const Fodder = () => {
    return (
        <section className='route__content'>
            <SortNav title='Фирменные кормовые травосмеси (для пастбищ и сенокоса)'/>
            <div className="container">
                <div className='fodder__items'>
                    <div className='fodder__item1'>
                        <Link to='/senokos' className='fodder__text'>ДЛЯ СЕНОКОСНОГО ИСПОЛЬЗОВАНИЯ</Link>
                    </div>
                    <div className='fodder__item2'>
                        <Link to='/combined' className='fodder__text'>ДЛЯ КОМБИНИРОВАННОГО ИСПОЛЬЗОВАНИЯ</Link>
                    </div>
                    <div className='fodder__item3'>
                        <Link to='/pasture' className='fodder__text'>ДЛЯ ПАСТБИЩНОГО ИСПОЛЬЗОВАНИЯ</Link>
                    </div>
                    <div className='fodder__item4'>
                        <Link to='/alfalfa' className='fodder__text'>ЛЮЦЕРНА</Link>
                    </div>
                </div>
                <SortItem path='fodder' wrap='уп'/>
            </div>
        </section>
    );
};

export default Fodder;