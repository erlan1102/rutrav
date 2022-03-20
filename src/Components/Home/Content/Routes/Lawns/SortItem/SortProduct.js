import React from 'react';
import {Link} from "react-router-dom";

const SortProduct = ({title}) => {
    return (
        <>
            <div className='route__nav'>
                <Link to='/' className='route__link'>Главная </Link>
                <span className='route__link-arrow'> </span>
                <Link to='/branded' className='route__link'> </Link>
                <span className='route__link-arrow'> </span>
                <p className='route__nav-text'>{title}</p>
            </div>
            <p className='route__title'>{title}</p>
        </>
    );
};

export default SortProduct;