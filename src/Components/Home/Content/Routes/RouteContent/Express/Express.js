import React from 'react';
import '../../Routes.css'
import {Link} from "react-router-dom";

const Express = () => {
    return (
        <div className='route'>
            <div className="container">
                <div className='route__nav'>
                    <Link className='route__link' to='/'>Главная </Link>
                    <span className='route__link-arrow'> </span>
                    <span className='route__nav-text'>Доставка</span>
                </div>
                <div className="route__info">
                    <p className='route__title'>Доставка</p>
                    <p className='route__text'>Мы осуществляем доставку по Москве, Московской области, Нижнему Новгороду, Санкт-Петербургу и по всей территории Российской Федерации.</p>
                    <p className='route__subtitle'>Доставка по Москве и Московской области</p>
                    <p className='route__text'>Доставка по Москве (в пределах МКАД и за МКАД) осуществляется с 10.00 до 18.00.
                        Доставка до 10.00 и после 18.00, а также в выходные и праздничные дни осуществляется только при наличии технической возможности у отдела доставки.</p>
                    <p className='route__subtitle'>Сроки доставки</p>
                    <p className='route__text'>Доставка заказов по Москве осуществляется как собственной курьерской службой, так и службой доставки "Грастин". Если товар есть в наличии, то сроки доставки - 1-3 дней с момента поступления заказа. Если товар под заказ, то сроки его доставки могут увеличиться.
                        Мы стараемся сделать покупку для наших клиентов максимально комфортной, поэтому всегда стараемся доставить заказ в минимальные сроки и удобное для Вас время.</p>
                    <p className='route__subtitle'>Стоимость доставки в пределах МКАД</p>
                    <p className='route__text'>Собственная автомобильная служба доставки:</p>
                    <p className='route__text'>До 500 кг – 500 рублей.</p>
                    <p className='route__text'>Более 500 кг - бесплатно.</p>
                    <p className='route__text'>Возврат и обмен товара</p>
                    <p className='route__text'>Служба доставки "Грастин" (только при общем весе заказа до 15 кг):</p>
                    <p className='route__text'>Оплата доставки по тарифам курьерской слжбы.</p>
                    <p className='route__text'>Диапазон от 220руб до 460 руб</p>
                    <p className='route__subtitle'>Стоимость доставки за МКАД</p>
                    <ul>
                        <li className='route__list'>до 5 км от МКАД - 750 руб</li>
                        <li className='route__list'>5-10 км от МКАД - 1250 руб</li>
                        <li className='route__list'>10-25 км от МКАД - 2000 руб</li>
                        <li className='route__list'>25-50 км от МКАД - 3000 руб</li>
                    </ul>
                    <p className='route__subtitle'>Дополнительные услуги службы доставки</p>
                    <p className='route__text'>Ручной подъем на этаж</p>
                    <ul>
                        <li className='route__list'>Общим весом до 3 кг – бесплатно</li>
                        <li className='route__list'>Общим весом от 3 кг до 20 кг – 50 руб./этаж</li>
                        <li className='route__list'>Общим весом до 30 кг – 100 руб./этаж</li>
                    </ul>
                    <p className='route__span'>Подъем на лифте: <span className='express__text'>100 рублей/ упаковка (более 3 кг)</span></p>
                    <p className='route__text'>Срочная доставка в пределах МКАД (до 500 кг)</p>
                    <p className='route__text'>Срочная доставка осуществляется в рабочее время в течение 5 часов с момента поступления заказа. Стоимость срочной доставки – плюс 1000 руб. к стоимости стандартной доставки.</p>
                    <p className='route__subtitle'>Самовывоз</p>
                    <p className='route__text'>Самовывоз товара осуществляется с наших складов по предварительному согласованию с менеджером:</p>
                    <ul>
                        <li className='route__sheet'>г. Москва, улица Автомоторная, 5Б, стр.3;</li>
                        <li className='route__sheet'>Московская область, Можайский район, д. Шаликово, ул Партизанская, 61Б;</li>
                    </ul>
                    <p className='route__subtitle'>Доставка по территории Российской Федерации.</p>
                    <p className='route__text'>Транспортные компании «ПЭК», «Деловые линии», «"Энергия», «Возовоз», «КИТ»</p>
                    <ul>
                        <li className='route__sheet'>После поступления от Вас заказа наш менеджер обрабатывает его, после чего он связывается с Вами по указанным Вами при оформлении заказа электронной почте либо по телефону.</li>
                        <li className='route__sheet'>Менеджер сообщит Вам стоимость услуг по доставке, после получения от Вас согласия на оплату заказа, мы выставим Вам счет и по факту поступления оплаты, отправим заказ через одну из вышеперечисленных транспортных компаний.</li>
                        <li className='route__sheet'>Стоимость самой отправки оплачивается в офисе транспортной компании при получении.
                            Стоимость отправки для каждого заказа рассчитывается индивидуально. Заказ нужно забирать со склада одной из вышеперечисленных транспортных компаний в Вашем городе, либо заказать доставку «до двери». Список городов есть на сайте транспортных компаний.</li>
                    </ul>
                    <p className='route__text'>Также Вы можете предложить к рассмотрению другую, удобную Вам транспортную компанию.</p>
                    <p className='route__subtitle'>Общие правила</p>
                    <p className='route__text'>При оформлении заказа необходимо указать: Ф.И.О., адрес доставки, способы связи, удобное время доставки.</p>
                    <ul>
                        <li className='route__list'>При получении заказа вы можете проверить комплектность и внешний вид товара, не производя ввод товара в эксплуатацию.</li>
                        <li className='route__list'>Сотрудник отдела доставки не в компетенции описать особенности изделия, способов установки и эксплуатации изделия.</li>
                    </ul>
                    <p className='route__text'>(На все интересующие Вас вопросы могут ответить наши специалисты).</p>
                    <p className='route__text'>Оплата заказанного товара производится только в рублях.</p>
                    <ul>
                        <li className='route__list'>Вы имеете право отказаться от совершения покупки, оплатив расходы, связанные с Вашим заказом, т.е сумму доставки товара (ГК РФ ст.497 п.1, п.2, п.3, п.4).</li>
                        <li className='route__list'>Оплата заказа по безналичному расчету производится только плательщиком, указанным в графе "Покупатель".</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Express;