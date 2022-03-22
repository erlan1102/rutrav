import React, {useEffect, useState,useContext} from 'react';
import {CustomContext} from "../../../../../../Context";
import './Product.css'
import axios from "axios";
import {useParams} from 'react-router-dom';

const Product = () => {
    const [ware, setWare] = useState([]);
    const params = useParams();
    const [count, setCount] = useState(1);
    const {addItem} = useContext(CustomContext);

    useEffect(()=> {
        axios(`http://localhost:8080/all?title=${params.title}`)
            .then(({data}) => setWare(data));
    },[]);

    return (
        <section className='product'>
            {
                ware.length &&
                <div>
                    <div className="container">
                        <div className='product__item'>
                            <div className='product__item-img'>
                                <img className='product__img' src={ware[0].imageUrl} alt=""/>
                            </div>
                            <div className='product__info'>
                                <p className='product__title'>{ware[0].title}</p>
                                <div className='product__all'>
                                    <div>
                                        <p className='product__price'>{ware[0].price}</p>
                                        <p className='product__pack'>При покупке от {ware[0].packaging}</p>
                                        <p className='product__subtitle'>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 13.1003 0.988061 15.07 1.86572M21 3.00572L11 13.0157L8.00001 10.0157" stroke="#2BA84A"/>
                                            </svg>
                                            Есть в наличии
                                        </p>
                                        <div className='product__info-paragraph'>
                                            <p className='product__info-subtitle'>
                                                Упаковка 40 кг: 1-2 мешка
                                                Розница, опт: от 3 мешков
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product__sum'>
                                            <div>
                                                <p className='product__subtitle'>Количество (уп, шт):</p>
                                                <p className='product__subtitle'>Итого:</p>
                                            </div>
                                            <div>
                                                <input min={1} value={count} onChange={(e) => setCount(e.target.value)} className='product__input' type="number"/>
                                                <span className='product__subtitle'>{ware[0].price.slice(0,ware[0].price.length - 6) * count} ₽</span>
                                            </div>
                                        </div>
                                        <button className='header__middle-btn' type='button' onClick={() => addItem(ware[0].title, count)}>Купить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default Product;