import React from 'react';
import './NotFound.css'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='hit-the-floor'>404</div>
            <p className='hit-the-text'>Такая страница не найдена</p>
            <div className='alternative-versions absolute bottom-0 w-full flex justify-center underline space-x-4 p-12'>
                <Link to='/'>
                    <button className='hit-the-link' type='button'>Вернуться на главную страницу</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;