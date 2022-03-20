import React, {useEffect, useState} from 'react';
import './Product-Item.css'
import {Link} from "react-router-dom";
import axios from "axios";

const ProductItem = ({path, wrap}) => {
    const [search, setSearch] = useState([]);
    useEffect(()=> {
        axios(`http://localhost:8080/${path}`)
            .then(({data}) => setSearch(data));
    },[]);
    return (
        <div className='product-item'>
            <div>
                {
                    search.map((item)=> (
                        <div className='route__box'>
                            <Link to='/product-item'>
                                <img className='route__box-img' src={item.imageUrl} alt="Lawn"/>
                                <p className='route__box-title'>{item.title}</p>
                                <p className='route__box-price'>от {item.price} ₽ / {wrap}</p>
                                <p className='route__box-pack'>от {item.packaging} <span className='route__bottom-span'>/ {wrap}</span></p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductItem;