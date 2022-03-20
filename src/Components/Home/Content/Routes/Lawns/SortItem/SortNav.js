import React from 'react';
import {Link} from "react-router-dom";

const SortNav = ({title}) => {
    return (
            <div className='container'>
                <div className='route__nav'>
                    <Link to='/' className='route__link'>Главная </Link>
                    <span className='route__link-arrow'> </span>
                    <p className='route__nav-text'>{title}</p>
                </div>
                <p className='route__title'>{title}</p>
            </div>
    );
};

export default SortNav;