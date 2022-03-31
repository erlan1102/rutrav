import React from 'react';
import './SixthScreen.css'
import Logo1 from '../../../../../../Assets/Sixth-screen/1.png'
import Logo2 from '../../../../../../Assets/Sixth-screen/2.png'
import Logo3 from '../../../../../../Assets/Sixth-screen/3.png'
import Logo4 from '../../../../../../Assets/Sixth-screen/4.png'

const SixthScreen = () => {
    return (
        <section className='sixth-screen'>
            <div className="container">
                    <p className='sixth-screen__title'>Наши клиенты</p>
                    <div className='sixth-screen__row'>
                        <img className='sixth-screen__img' src={Logo1} alt="Logo"/>
                        <img className='sixth-screen__img' src={Logo2} alt="Logo"/>
                        <img className='sixth-screen__img' src={Logo3} alt="Logo"/>
                        <img className='sixth-screen__img' src={Logo4} alt="Logo"/>
                    </div>
            </div>
        </section>
    );
};

export default SixthScreen;