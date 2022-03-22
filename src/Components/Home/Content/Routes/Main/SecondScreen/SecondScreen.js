import React from 'react';
import './SecondScreen.css'
import {Link} from "react-router-dom";

const SecondScreen = () => {
    return (
        <section className='second-screen'>
                <div className="second-screen__row">
                    <div className='second-screen-box1'>
                        <div>
                            <Link to='/order' className='second-screen-title'>Травосмесь на заказ по вашему составу</Link>
                            <p className='second-screen-subtitle'>Если из наших фирменных травосмесей вам не подходит ни один состав, мы можем изготовить смесь специально для вас.</p>
                        </div>
                    </div>
                    <div className='second-screen__pack'>
                        <div className='second-screen-box2'>
                            <Link to='/branded' className='second-screen-text'>Фирменные газонные травосмеси</Link>
                        </div>
                        <div className='second-screen-box3'>
                            <Link to='/perennial' className='second-screen-text'>СЕМЕНА МНОГОЛЕТНИХ ТРАВ</Link>
                        </div>
                        <div className='second-screen-box4'>
                            <Link to='/sowing' className='second-screen-text'>ГИДРОПОСЕВ ГАЗОНА</Link>
                        </div>
                        <div className='second-screen-box5'>
                            <Link to='/related' className='second-screen-text'>СОПУТСТВУЮЩИЕ ТОВАРЫ ДЛЯ ГАЗОНОВ</Link>
                        </div>
                        <div className='second-screen-box6'>
                            <Link to='/fodder' className='second-screen-text'>ФИРМЕННЫЕ КОРМОВЫЕ ТРАВОСМЕСИ</Link>
                        </div>
                        <div className='second-screen-box7'>
                            <Link to='/fertilizers' className='second-screen-text'>ГАЗОННЫЕ УДОБРЕНИЯ</Link>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default SecondScreen;