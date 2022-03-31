import React, {useEffect, useContext} from 'react';
import axios from "axios";
import Bunny from '../../../../../../Assets/logo/hare.png'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask'
import {CustomContext} from "../../../../../../Context";

const SortItem = ({path}) => {
    const {searchProduct,setSearchProduct,addReview} = useContext(CustomContext);
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        mode: "onBlur",
    });

    useEffect(()=> {
        axios(`http://localhost:8080/${path}`)
            .then(({data}) => setSearchProduct(data));
    },[]);
    return (
        <div className='route__row'>
            {
                searchProduct.map((item)=>(
                    <div key={item.id} className='route__box'>
                        <img className='route__box-img' src={item.imageUrl} alt="Lawn"/>
                        <Link to={`/product/${item.title}`}><p className='route__box-title'>{item.title}</p></Link>
                        <p className='route__box-price'>от {item.price}</p>
                        <p className='route__box-pack'>от {item.packaging}</p>
                    </div>
                ))
            }
            <div className='route__form'>
                <div className='route__form-left'>
                    <p className='route__subtitle'>Не нашли нужную травосмесь? Сделаем по вашему составу.</p>
                    <form action="https://formsubmit.co/erlanisakov60@gmail.com" method="POST" onSubmit={()=> handleSubmit(addReview)}>
                        <p className='route__text'>Имя*</p>
                        <input className='route__form-input' type="text" name="name"
                               {...register('name', {
                                   required: "Поле обязательно к заполнению!",
                                   minLength: {
                                       value: 2,
                                       message: 'Минимум 2 символа!'
                                   }})}/>
                        <div style={{height: 20}}>{errors?.name && <p className='form__error'>{errors?.name?.message || "Error!"}</p>}</div>
                        <p className='route__text'>Телефон*</p>
                        <InputMask id='number' required className='route__form-input' mask="+7 (999) 999-99-99" name="tel"
                                   {...register('num', {
                                       required: "Поле обязательно к заполнению!",
                                       minLength: {
                                           value: 2,
                                           message: 'Минимум 2 символа!'
                                       }})}/>
                        <div style={{height: 20}}>{errors?.num && <p className='form__error'>{errors?.num?.message || "Error!"}</p>}</div>
                        <p className='route__text'>E-mail*</p>
                        <input className='route__form-input' type="email" name="email"
                               {...register('mail', {
                                   required: "Необходимо заполнить!",
                                   minLength: {
                                       value: 5,
                                       message: 'Минимум 5 символа!'
                                   }})}/>
                        <div style={{height: 20}}>{errors?.mail && <p className='form__error'>{errors?.mail?.message || "Error!"}</p>}</div>
                        <p className='route__text'>Опишите необходимый состав</p>
                        <textarea className='route__form-descr' name="description"
                                  {...register('descr', {
                                      required: "Необходимо заполнить!",
                                      minLength: {
                                          value: 10,
                                          message: 'Минимум 10 символа!'
                                      }})}/>
                        <div style={{height: 20}}>{errors?.descr && <p className='form__error'>{errors?.descr?.message || "Error!"}</p>}</div>
                        <button className='route__form-btn' type='submit'>Отправить</button>
                    </form>
                </div>
                <img className='route__form-img' src={Bunny} alt="bunny"/>
            </div>
            <div className='route__feature'>
                <p className='route__title'>Качественные травосмеси различного назначения</p>
                <p className='route__text'>Газонная трава используется повсеместно: для создания спортивных площадок, гольф-полей, озеленения лужаек на дачных участках, для газонов специального назначения (склоны, откосы, рекультивация почвы), при благоустройстве городских территорий (парки, скверы и т.д.).</p>
                <p className='route__text'>Как правило, в состав травосмеси входит от трех видов трав, каждая из которых дополняет и компенсирует недостатки друг друга. Специалисты агрофирмы «Русские травы» создают специальные смеси из трав, которые адаптированы под определенные климатические и эксплуатационные условия. Наша фирменная продукция прошла подтверждение на соответствие требованиям ГОСТ Р 52325-2005 (на все травосмеси есть соответствующие паспорта качества).</p>
                <p className='route__title'>Классификация травосмесей</p>
                <p className='route__text'>Семена газонной травы поставляются в фирменных мешках массой по 3,5, 7 и 20 кг. Всегда в наличии на наших складах до полутора тысяч тонн готовой продукции. При покупке предоставляем заказчику необходимые документы.</p>
                <p className='route__text'>В 2005 году на основе наработанного опыта была основана собственная агрофирма – как центр производства семян газонных травосмесей с подбором трав, которые оптимально подходят для российских климатических условий. За 15 лет работы был существенно расширен ассортимент как по продукции для городского и придорожного озеленения, так и по премиальным ландшафтным травосмесям. Заключены прямые контракты с ведущими отечественными и европейскими производителями семян трав, а также селекционерами новых сортов.</p>
                <p className='route__text'>В продаже есть различные виды травосмесей, которые условно можно классифицировать на несколько категорий:</p>
                <ul>
                    <li className='route__list'>Партерный. Очень интересный тип смеси, которая состоит из нескольких разновидностей рыхлокустовых низовых и корневищно-рыхлокустовых трав. Основное назначение – украшение участка, но лучше исключить нагрузки.</li>
                    <li className='route__list'>Садово-парковый. Отличается универсальностью: устойчивость к вытаптыванию, подходят для создания лужаек для отдыха.</li>
                    <li className='route__list'>Спортивный. Хорошо сопротивляется нагрузкам, быстро восстанавливается после повреждений. Этими семенами засеивают футбольные поля, детские площадки, а также другие территории, которые предназначены для активного использования.</li>
                </ul>
                <p className='route__text'>Это общая классификация, потому что у нас в продаже также есть травосмеси для городского, придорожного и загородного озеленения, для южных и северных регионов. Т.е. они обладают разным составом, который зависит от дальнейших условий произрастания (засуха, повышенная влажность, низкие температуры и т.д.).</p>
                <p className='route__title'>Ассортимент компании «Русские травы»</p>
                <p className='route__text'>На каждой странице товаров цены смесей газонных трав разделены на мелко-, средне- и крупнооптовые. Опт начинается от 100 кг (5 упаковок). Действительно недорого приобрести газонные травосмеси можно при заказе от 20 и более упаковок. Действует накопительная система скидок (скидка привязывается к общему объему закупок).</p>
                <p className='route__text'>Вы можете получить консультацию по выбору смеси, позвонив нам по контактному номеру телефона или написав на электронную почту. Нам понадобится подробная информация о вашем объекте (уровень влажности, освещенности и т.д.).</p>
                <p className='route__text'>Купить оптом семена для газона можно в компании «Русские травы», оформив доставку по Москве или области. Доставляем в течение трех дней со дня оплаты заказа. Возможна доставка и в другие регионы России с помощью услуг транспортных компаний (мы доставляем товары только до терминала ТК). Быстрее получить заказ можно с помощью самовывоза из нашего склада (после подтверждения оплаты счета).</p>
            </div>
        </div>
    );
};

export default SortItem;