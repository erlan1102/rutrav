import React from 'react';
import './Perennial.css'
import SortNav from "../../SortItem/SortNav";
import {Link} from "react-router-dom";
import SortItem from "../../SortItem/SortItem";

const Perennial = () => {
    return (
        <section className='route__content'>
            <SortNav title='Семена многолетних трав (отдельные виды)'/>
            <div className="container">
                <div className='perennial__items'>
                    <div className='perennial__item1'>
                        <Link to='/perennial/bluegrass' className='perennial__text'>МЯТЛИК</Link>
                    </div>
                    <div className='perennial__item2'>
                        <Link to='/perennial/oatmeal' className='perennial__text'>ОВСЯНИЦА</Link>
                    </div>
                    <div className='perennial__item3'>
                        <Link to='/perennial/ryegrass' className='perennial__text'>РАЙГРАС</Link>
                    </div>
                    <div className='perennial__item4'>
                        <Link to='/perennial/clover' className='perennial__text'>КЛЕВЕР (ПОЛЗУЧИЙ, ЛУГОВОЙ)</Link>
                    </div>
                    <div className='perennial__item5'>
                        <Link to='/perennial/alfalfa' className='perennial__text'>ЛЮЦЕРНА</Link>
                    </div>
                    <div className='perennial__item6'>
                        <Link to='/perennial/pike' className='perennial__text'>ЩУЧКА ДЕРНИСТАЯ</Link>
                    </div>
                    <div className='perennial__item7'>
                        <Link to='/perennial/polevitsa' className='perennial__text'>ПОЛЕВИЦА</Link>
                    </div>
                    <div className='perennial__item8'>
                        <Link to='/perennial/timofeevka' className='perennial__text'>ТИМОФЕЕВКА ЛУГОВАЯ</Link>
                    </div>
                    <div className='perennial__item9'>
                        <Link to='/perennial/rump' className='perennial__text'>КОСТРЕЦ</Link>
                    </div>
                    <div className='perennial__item10'>
                        <Link to='/perennial/festulolium' className='perennial__text'>ФЕСТУЛОЛИУМ</Link>
                    </div>
                    <div className='perennial__item11'>
                        <Link to='/perennial/hedgehog' className='perennial__text'>ЕЖА СБОРНАЯ</Link>
                    </div>
                    <div className='perennial__item12'>
                        <Link to='/perennial/canary' className='perennial__text'>КАНАРЕЕЧНИК (ДВУКИСТОЧНИК)</Link>
                    </div>
                </div>
                <SortItem path='perennial'/>
            </div>
        </section>
    );
};

export default Perennial;