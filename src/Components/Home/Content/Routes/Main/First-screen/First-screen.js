import React from 'react';
import Bag from "../../../../../../Assets/First-screen/bag.png";
import Lawn from "../../../../../../Assets/First-screen/lawn.png";
import './FirstScreen.css'
import {Link} from "react-router-dom";

const FirstScreen = () => {
    return (
        <section className='first-screen'>
            <div className="container">
                <div className='first-screen__row'>
                    <div className='first-screen__info'>
                        <p className='first-screen__info-title'>Семена газонных трав от производителя</p>
                        <p className='first-screen__info-subtitle'>«Русские травы» — это оптовая компания-производитель семян многолетних трав, а также травосмесей для газонов различных типов в строгом соответствии с требованиями государственных стандартов. Качество нашей продукции соответствует ГОСТ Р 52 325-2005.</p>
                        <div className='first-screen__add'>
                            <Link to='/catalog'><button className='first-screen__add-btn' type='button'>Подобрать травосмеси</button></Link>
                            <Link to='/cheap' className='first-screen__add-text'>Дешевые травосмеси</Link>
                        </div>
                    </div>
                    <div className='first-screen__img'>
                        <img className='first-screen__img-bag' src={Bag} alt="Bag"/>
                        <span className='first-screen__img-shadow'> </span>
                        <img className='first-screen__img-lawn' src={Lawn} alt="Lawn"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstScreen;