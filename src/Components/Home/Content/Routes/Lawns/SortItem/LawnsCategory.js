import React from 'react';
import SortNav from "./SortNav";
import SortItem from "./SortItem";

const LawnsCategory = ({title, path, wrap}) => {
    return (
        <div className='route__content'>
            <SortNav title={title}/>
            <div className="container">
                <SortItem path={path} wrap={wrap}/>
            </div>
        </div>
    );
};

export default LawnsCategory;