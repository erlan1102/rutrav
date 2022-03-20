import React from 'react';
import './FourthScreen.css'
import Man from '../../../../../../Assets/Fourth-screen/man.png'
import Bag from '../../../../../../Assets/Fourth-screen/bag.png'

const FourthScreen = () => {
    return (
        <section className='fourth-screen'>
            <div className="container">
                <div className="fourth-screen__row">
                    <div className='fourth-screen__img'>
                        <img className='fourth-screen__img-man' src={Man} alt="Man"/>
                        <img className='fourth-screen__img-bag' src={Bag} alt="Bag"/>
                    </div>
                    <div className='fourth-screen__info'>
                        <p className='fourth-screen__info-title'>Травосмеси под нужды заказчика</p>
                        <p className='fourth-screen__info-subtitle'>Наши газонные травосмеси подходят для различных почв и территорий. Они состоят из различных монокультур, которые отлично дополняют друг друга в комплексе. В состав входят мятлик луговой, райграс (однолетний, многолетний), тимофеевка луговая, овсяница красная и другие виды трав.
                            При необходимости помогаем выбрать правильный вариант смеси, в зависимости от необходимых компонентов, условий к климату и выращиванию, а также требованиям к эксплуатации.
                        </p>
                        <p className='fourth-screen__info-text'>Для наших клиентов мы также предлагаем большой выбор сопутствующих товаров для посева и ухода за газоном:</p>
                        <ul>
                            <li className='fourth-screen__info-list'>минеральные удобрения;</li>
                            <li className='fourth-screen__info-list'>средства химической защиты растений (фунгициды, гербициды, инсектициды);</li>
                            <li className='fourth-screen__info-list'>стимуляторы роста;</li>
                            <li className='fourth-screen__info-list'>укрывной материал.</li>
                        </ul>
                        <p className='fourth-screen__info-subtitle'>Предоставляем подробные консультации в области озеленения и сельского хозяйства. Наши специалисты могут решить многие вопросы при просмотре фото или видео с вашего участка, либо в ходе телефонного разговора.</p>
                        <p className='fourth-screen__info-subtitle'>Приобрести семена газонной травы оптом от производителя можно в агрофирме «Русские травы», оформив доставку по Москве и области. После оплаты доставляем в течение 3 дней. Возможна доставка в регионы России (цена и сроки зависят от транспортной компании).</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourthScreen;