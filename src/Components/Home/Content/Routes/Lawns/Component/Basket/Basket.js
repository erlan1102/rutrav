import React, {useEffect, useContext} from 'react';
import {CustomContext} from "../../../../../../../Context";
import './Basket.css'
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";
import axios from "axios";

const Basket = () => {
    const {plusOne, minusOne,setWare,cart,deleteItem,setCart} = useContext(CustomContext);
    const params = useParams();

    useEffect(()=> {
        axios(`http://localhost:8080/all?title=${params.title}`)
            .then(({data}) => setWare(data));
    },[]);
    return (
        <div className='basket'>
            <div className="container">
                <p className='route__title'>Корзина</p>
                <div className='basket__express'>
                    <p className='basket__express-title'>Доступные действия:</p>
                    <Link to='/placeanorder'><p className='basket__express-subtitle'>Оформить заказ</p></Link>
                    <p className='basket__express-subtitle' onClick={()=> setCart([])}>Очистить корзину</p>
                </div>
                {cart.length ?
                    <table className='basket__table'>
                    <thead className='basket__thead'>
                    <tr>
                        <td className='basket__info-img basket__info-one'>Изображение</td>
                        <td className='basket__info-name basket__info-two'>Наименование</td>
                        <td className='basket__info-sum basket__info-three' >Количество</td>
                        <td className='basket__info-sum basket__info-one'>Стоимость</td>
                        <td className='basket__info-sum basket__info-one'>Сумма</td>
                        <td className='basket__info-three'>Удалить</td>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.map((item)=> (
                        <tr>
                            <td className='basket__info-img basket__info-one'><img src={item.imageUrl} alt={item.title}/></td>
                            <td className='basket__info-name basket__info-two'>{item.title}</td>
                            <td className='basket__info-sum basket__info-three'>
                                <div className='basket__info-summa'>
                                    <p className='basket__info-minus' onClick={()=> minusOne(item)}>-</p>
                                    {item.count}
                                    <p className='basket__info-plus' onClick={()=> plusOne(item)}>+</p></div>
                            </td>
                            <td className='basket__info-sum basket__info-one'>{item.price}</td>
                            <td className='basket__info-sum basket__info-one'>{item.count * item.price.slice(0, item.price.length - 6)} ₽</td>
                            <td className='basket__info-three'><p onClick={() => deleteItem(item.title)} className='basket__info-delete'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.4158 8.00409L15.7158 1.71409C15.9041 1.52579 16.0099 1.27039 16.0099 1.00409C16.0099 0.73779 15.9041 0.482395 15.7158 0.294092C15.5275 0.105788 15.2721 0 15.0058 0C14.7395 0 14.4841 0.105788 14.2958 0.294092L8.0058 6.59409L1.7158 0.294092C1.52749 0.105788 1.2721 2.36434e-07 1.0058 2.38419e-07C0.739497 2.40403e-07 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.00170684 0.73779 0.00170684 1.00409C0.00170684 1.27039 0.107495 1.52579 0.295798 1.71409L6.5958 8.00409L0.295798 14.2941C0.20207 14.3871 0.127676 14.4977 0.0769072 14.6195C0.0261385 14.7414 0 14.8721 0 15.0041C0 15.1361 0.0261385 15.2668 0.0769072 15.3887C0.127676 15.5105 0.20207 15.6211 0.295798 15.7141C0.388761 15.8078 0.499362 15.8822 0.621222 15.933C0.743081 15.9838 0.873786 16.0099 1.0058 16.0099C1.13781 16.0099 1.26852 15.9838 1.39038 15.933C1.51223 15.8822 1.62284 15.8078 1.7158 15.7141L8.0058 9.41409L14.2958 15.7141C14.3888 15.8078 14.4994 15.8822 14.6212 15.933C14.7431 15.9838 14.8738 16.0099 15.0058 16.0099C15.1378 16.0099 15.2685 15.9838 15.3904 15.933C15.5122 15.8822 15.6228 15.8078 15.7158 15.7141C15.8095 15.6211 15.8839 15.5105 15.9347 15.3887C15.9855 15.2668 16.0116 15.1361 16.0116 15.0041C16.0116 14.8721 15.9855 14.7414 15.9347 14.6195C15.8839 14.4977 15.8095 14.3871 15.7158 14.2941L9.4158 8.00409Z" fill="#FF5F01"/>
                            </svg>
                            </p></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                    : <p className='basket__not'>В корзине пусто</p> }

                <div className='basket__express'>
                    <div className='basket__express-dub'>
                        <p className='basket__express-title'>Всего товаров:</p>
                        <p className='basket__sum'>{cart.reduce((acc,rec)=> acc + +rec.count,0)}</p>
                    </div>
                    <div className='basket__express-dub'>
                        <p className='basket__express-title'>Сумма заказов:</p>
                        <p className='basket__sum'>{cart.reduce((acc, rec)=> acc + (rec.count * rec.price.slice(0, rec.price.length - 6)),0)} ₽</p>
                    </div>
                </div>
                <Link to='/placeanorder'><button className='header__middle-btn' type='button'>Оформить заказ</button></Link>
            </div>
        </div>
    );
};

export default Basket;