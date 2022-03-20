import React from 'react';
import RouteNav from "../../Lawns/SortItem/RouteNav";

const Order = () => {
    return (
        <section className='route__content'>
            <div className="container">
                <RouteNav to='/branded' paragraph='Фирменные газонные травосмеси' title='На заказ по вашему составу'/>
                <p className='route__text'>Если из наших фирменных травосмесей вам не подходит не один состав, мы можем изготовить смесь специально для вас. Вы называете необходимый состав смеси и в течении трех-пяти дней он будет изготовлен. Заказы принимаются на массу от 100 кг. Из трав, семеноводство которых не ведется, в том числе дикорастущих, выдуманных, смеси не изготавливаем.</p>
                <p className='route__text'>Для заказа пишите нам на почту <a className='route__mail' href="mailto:info@rutrav.ru">info@rutrav.ru</a></p>
            </div>
        </section>
    );
};

export default Order;