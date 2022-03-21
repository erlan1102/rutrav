import React from 'react';
import SortItem from "./SortItem";
import RouteNav from "./RouteNav";

const Lawns = ({to, paragraph,title, path}) => {

    return (
        <section className='route__content'>
            <div className="container">
                <RouteNav to={to} paragraph={paragraph} title={title}/>
                <SortItem path={path}/>
            </div>
        </section>
    );
};

export default Lawns;