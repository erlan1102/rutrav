import React, {useContext} from 'react';
import './PlaceanOrder.css'
import {useForm} from "react-hook-form";
import {CustomContext} from "../../../../../../../Context";

const PlaceanOrder = () => {
    const {cart, deleteItem, setCart,addReview} = useContext(CustomContext);
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        mode: "onBlur",
    });
    return (
        <div className='placeanorder'>
            <div className="container">
                <p className='route__title'>Оформление заказа</p>
                <div className='placeanorder__item'>
                    <div className='placeanorder__left'>
                        <div className='placeanorder__info'>
                            <div className='placeanorder__info-region'>
                                <p className='placeanorder__info-title'>1. Тип плательщика и регион доставки</p>
                            </div>
                            <p className='placeanorder__info-type'>Тип плательщика:</p>
                            <label className='placeanorder__info-label'>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="option1"
                                    checked={true}
                                    className="placeanorder__info-face"
                                />
                                Физическое лицо
                            </label>
                            <label className='placeanorder__info-label'>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="option1"
                                    checked={true}
                                    className="placeanorder__info-face"
                                />
                                Юридическое лицо или ИП
                            </label>
                        </div>
                        <div className='placeanorder__info'>
                            <div className='placeanorder__info-region'>
                                <p className='placeanorder__info-title'>2. Доставка</p>
                            </div>
                            <p className='placeanorder__info-type'>Способ доставки:</p>
                            <label className='placeanorder__info-label'>
                                <input
                                    type="radio"
                                    name="react-tips2"
                                    value="option2"
                                    checked={true}
                                    className="placeanorder__info-face"
                                />
                                Самовывоз
                            </label>
                            <label className='placeanorder__info-label'>
                                <input
                                    type="radio"
                                    name="react-tips2"
                                    value="option2"
                                    checked={true}
                                    className="placeanorder__info-face"
                                />
                                Доставка в пределах МКАД
                            </label>
                            <p className='placeanorder__info-type'>Стоимость:</p>
                        </div>
                        <div className='placeanorder__info'>
                            <div className='placeanorder__info-region'>
                                <p className='placeanorder__info-title'>3. Оплата</p>
                            </div>
                            <p className='placeanorder__info-type'>Способ оплаты:</p>
                            <label className='placeanorder__info-label'>
                                <input
                                    type="radio"
                                    name="react-tips3"
                                    value="option1"
                                    checked={true}
                                    className="placeanorder__info-face"
                                />
                                Банковской картой при получении
                                <p className='placeanorder__info-wallet'>
                                    <svg width="35" height="21" viewBox="0 0 35 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.1068 20.2136C15.6886 20.2136 20.2136 15.6886 20.2136 10.1068C20.2136 4.52497 15.6886 0 10.1068 0C4.52497 0 0 4.52497 0 10.1068C0 15.6886 4.52497 20.2136 10.1068 20.2136Z" fill="#EA001B"/>
                                        <path d="M24.5443 20.2136C30.1261 20.2136 34.6511 15.6886 34.6511 10.1068C34.6511 4.52497 30.1261 0 24.5443 0C18.9625 0 14.4375 4.52497 14.4375 10.1068C14.4375 15.6886 18.9625 20.2136 24.5443 20.2136Z" fill="#FFA200"/>
                                    </svg>
                                </p>
                                <p className='placeanorder__info-wallet'>
                                    <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6682 9.78705C23.6682 9.78705 24.0509 11.6138 24.1365 11.9969H22.4549C22.621 11.5598 23.2604 9.86071 23.2604 9.86071C23.2503 9.87545 23.4266 9.41384 23.5273 9.12902L23.6682 9.78705ZM29 2.35714V19.6429C29 20.9442 27.9175 22 26.5833 22H2.41667C1.08247 22 0 20.9442 0 19.6429V2.35714C0 1.0558 1.08247 0 2.41667 0H26.5833C27.9175 0 29 1.0558 29 2.35714ZM7.67795 14.6929L10.8599 7.07143H8.72014L6.74149 12.2768L6.525 11.221L5.82014 7.71473C5.70434 7.22857 5.34688 7.09107 4.90382 7.07143H1.64635L1.61111 7.22366C2.4066 7.42009 3.11649 7.70491 3.73576 8.06339L5.53819 14.6929H7.67795ZM12.4307 14.7027L13.6995 7.07143H11.6755L10.4118 14.7027H12.4307ZM19.4743 12.208C19.4844 11.3388 18.9406 10.6759 17.7776 10.1308C17.0677 9.78214 16.6347 9.54643 16.6347 9.18795C16.6448 8.86384 17.0023 8.52991 17.7977 8.52991C18.4573 8.51518 18.9406 8.66741 19.3031 8.81964L19.4844 8.90312L19.7613 7.25312C19.3635 7.10089 18.7292 6.92902 17.9488 6.92902C15.95 6.92902 14.5453 7.97009 14.5352 9.45312C14.5201 10.5482 15.5422 11.1571 16.3075 11.5254C17.0878 11.8987 17.3547 12.1442 17.3547 12.4732C17.3446 12.9839 16.7203 13.2196 16.1413 13.2196C15.3358 13.2196 14.9028 13.0969 14.2432 12.8121L13.9764 12.6893L13.6944 14.4031C14.1677 14.6143 15.0437 14.8009 15.95 14.8107C18.0747 14.8156 19.4592 13.7893 19.4743 12.208ZM26.5833 14.7027L24.9521 7.07143H23.3863C22.903 7.07143 22.5354 7.20893 22.329 7.70491L19.3233 14.7027H21.4479C21.4479 14.7027 21.7953 13.7598 21.8708 13.5585H24.4688C24.5292 13.8286 24.7104 14.7027 24.7104 14.7027H26.5833Z" fill="#0067E0"/>
                                    </svg>
                                </p>
                            </label>
                            <label className='placeanorder__info-label'>
                                <input
                                    type="radio"
                                    name="react-tips3"
                                    value="option1"
                                    checked={true}
                                    className="placeanorder__info-face"
                                />
                                Наличные
                                <p className='placeanorder__info-wallet'>
                                    <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.1574 18.1828C27.1574 19.341 26.218 20.2804 25.0597 20.2804H2.09763C0.939411 20.2804 0 19.341 0 18.1828V2.09763C0 0.939411 0.939411 0 2.09763 0H25.0597C26.218 0 27.1574 0.939411 27.1574 2.09763V18.1828Z" fill="#462703"/>
                                        <path d="M27.1574 19.5812C27.1574 20.7394 26.218 21.6789 25.0597 21.6789H2.09763C0.939411 21.6789 0 20.7394 0 19.5812V3.49607C0 2.33785 0.939411 1.39844 2.09763 1.39844H25.0597C26.218 1.39844 27.1574 2.33785 27.1574 3.49607V19.5812Z" fill="#683C11"/>
                                        <path d="M25.6026 18.6599C25.6026 19.6865 24.7701 20.5173 23.7452 20.5173H3.41212C2.38551 20.5173 1.55469 19.6849 1.55469 18.6599V4.41737C1.55469 3.39076 2.38551 2.55994 3.41212 2.55994H23.7435C24.7701 2.55994 25.601 3.39241 25.601 4.41737V18.6599H25.6026Z" stroke="#936037"/>
                                        <path d="M28.6731 13.0727C28.6731 13.0727 27.9328 14.4234 27.0214 14.4234H19.3119C18.4005 14.4234 17.6602 13.6831 17.6602 12.7684V9.22954C17.6602 8.31645 18.3018 7.57446 18.3018 7.57446H27.0214C27.9344 7.57446 28.6731 8.3148 28.6731 9.22954V13.0727Z" fill="#462703"/>
                                        <path d="M28.9993 12.0839C28.9993 12.997 28.259 13.739 27.3475 13.739H19.6381C18.725 13.739 17.9863 12.9987 17.9863 12.0839V8.54509C17.9863 7.632 18.7267 6.89001 19.6381 6.89001H27.3475C28.2606 6.89001 28.9993 7.63036 28.9993 8.54509V12.0839Z" fill="#8B4F1C"/>
                                        <path d="M22.641 10.3154C22.641 11.4505 21.7213 12.3702 20.5861 12.3702C19.4509 12.3702 18.5312 11.4505 18.5312 10.3154C18.5312 9.18017 19.4509 8.2605 20.5861 8.2605C21.7213 8.2605 22.641 9.18017 22.641 10.3154Z" fill="#F39200"/>
                                        <path d="M21.4226 8.43994C21.7055 8.79201 21.875 9.23786 21.875 9.72484C21.875 10.86 20.9553 11.7797 19.8201 11.7797C19.5224 11.7797 19.2394 11.7155 18.9844 11.6004C19.3611 12.0693 19.9386 12.3703 20.5868 12.3703C21.722 12.3703 22.6417 11.4507 22.6417 10.3155C22.6417 9.47971 22.1399 8.76076 21.4226 8.43994Z" fill="#CC7D00"/>
                                    </svg>
                                </p>
                            </label>
                        </div>
                        <div className='placeanorder__info'>
                            <div className='placeanorder__info-region'>
                                <p className='placeanorder__info-title'>4. Контактная информация</p>
                            </div>
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
                                <input className='route__form-input' type="tel" name="tel"
                                       {...register('num', {
                                           required: "Необходимо заполнить!",
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
                                <p className='route__text'>Комментарий к заказу</p>
                                <textarea className='route__form-descr' name="description"
                                          {...register('descr', {
                                              required: "Необходимо заполнить!",
                                              minLength: {
                                                  value: 10,
                                                  message: 'Минимум 10 символа!'
                                              }})}/>
                                <div style={{height: 20}}>{errors?.descr && <p className='form__error'>{errors?.descr?.message || "Error!"}</p>}</div>
                            </form>
                        </div>
                        <div className='placeanorder__info'>
                            <div className='placeanorder__info-region'>
                                <p className='placeanorder__info-title'>5. Товары в заказе</p>
                            </div>
                            {cart.length ?
                                <table className='basket__table'>
                                    <tbody>
                                    {cart.map((item)=> (
                                        <tr>
                                            <td className='basket__info-img basket__info-one'><img src={item.imageUrl} alt={item.title}/></td>
                                            <td className='basket__info-name basket__info-two'>{item.title}</td>
                                            <td className='basket__info-sum basket__info-one' >{item.count}</td>
                                            <td className='basket__info-sum basket__info-one'>{item.price}</td>
                                            <td className='basket__info-sum basket__info-one'>{item.count * item.price.slice(0, item.price.length - 6)} ₽</td>
                                            <td className='basket__info-one'><p onClick={() => deleteItem(item.title)} className='basket__info-delete'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.4158 8.00409L15.7158 1.71409C15.9041 1.52579 16.0099 1.27039 16.0099 1.00409C16.0099 0.73779 15.9041 0.482395 15.7158 0.294092C15.5275 0.105788 15.2721 0 15.0058 0C14.7395 0 14.4841 0.105788 14.2958 0.294092L8.0058 6.59409L1.7158 0.294092C1.52749 0.105788 1.2721 2.36434e-07 1.0058 2.38419e-07C0.739497 2.40403e-07 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.00170684 0.73779 0.00170684 1.00409C0.00170684 1.27039 0.107495 1.52579 0.295798 1.71409L6.5958 8.00409L0.295798 14.2941C0.20207 14.3871 0.127676 14.4977 0.0769072 14.6195C0.0261385 14.7414 0 14.8721 0 15.0041C0 15.1361 0.0261385 15.2668 0.0769072 15.3887C0.127676 15.5105 0.20207 15.6211 0.295798 15.7141C0.388761 15.8078 0.499362 15.8822 0.621222 15.933C0.743081 15.9838 0.873786 16.0099 1.0058 16.0099C1.13781 16.0099 1.26852 15.9838 1.39038 15.933C1.51223 15.8822 1.62284 15.8078 1.7158 15.7141L8.0058 9.41409L14.2958 15.7141C14.3888 15.8078 14.4994 15.8822 14.6212 15.933C14.7431 15.9838 14.8738 16.0099 15.0058 16.0099C15.1378 16.0099 15.2685 15.9838 15.3904 15.933C15.5122 15.8822 15.6228 15.8078 15.7158 15.7141C15.8095 15.6211 15.8839 15.5105 15.9347 15.3887C15.9855 15.2668 16.0116 15.1361 16.0116 15.0041C16.0116 14.8721 15.9855 14.7414 15.9347 14.6195C15.8839 14.4977 15.8095 14.3871 15.7158 14.2941L9.4158 8.00409Z" fill="#FF5F01"/>
                                            </svg>
                                            </p></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                : <p className='basket__not'>Корзина пуста</p> }
                        </div>
                    </div>
                    <div className='placeanorder__right'>
                        <div className='placeanorder__info'>
                            <div className='placeanorder__right-region'>
                                <p className='placeanorder__right-title'>Итоговый результат</p>
                            </div>
                            <div className='placeanorder__right-info'>
                                <div className='placeanorder__right-basket'>
                                    <p className='placeanorder__right-type'>Товаров на:</p>
                                    <p className='placeanorder__right-sum'>{cart.reduce((acc, rec)=> acc + (rec.count * rec.price.slice(0, rec.price.length - 6)),0)} ₽</p>
                                </div>
                                <div className='placeanorder__right-basket'>
                                    <p className='placeanorder__right-type'>Количество товаров:</p>
                                    <p className='placeanorder__right-sum'>{cart.reduce((acc,rec)=> acc + +rec.count,0)}</p>
                                </div>
                                <div className='placeanorder__right-basket'>
                                    <p className='placeanorder__right-type'>Доставка:</p>
                                    <p className='placeanorder__right-sum'>бесплатно</p>
                                </div>
                            </div>
                            <div className='placeanorder__right-basket'>
                                <p className='placeanorder__right-type'>Итого:</p>
                                <p className='placeanorder__right-summa'>{cart.reduce((acc, rec)=> acc + (rec.count * rec.price.slice(0, rec.price.length - 6)),0)} ₽</p>
                            </div>
                            <p className='placeanorder__right-min'>*Минимальная сумма заказа 5000 руб.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceanOrder;