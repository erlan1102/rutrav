import React, {createContext, useState} from 'react'

export const CustomContext = createContext();
export const Context = (props) => {
    const [all, setAll] = useState([]);
    const [cart, setCart] = useState([]);

    const addItem = (title,count) => {
        let idx = all.findIndex((item) => item.title === title );

        if (cart.filter((item) => item.title === title ).length) {
            setCart(cart.map((item) => {
                if (item.title === title){
                    return {...item, count: +item.count + +count}
                } else {
                    return item
                }
            }))
        } else {
            setCart([...cart, {
                ...all[idx],
                count: count
            }])
        }


    };

    const minusOne = (item) => {
        let idx = cart.findIndex((el)=> {
            if (item.categories === 'pizza'){
                return el.title === item.title && el.size === item.size
            } else{
                return el.title === item.title
            }
        });
        if (cart[idx].count > 1){
            setCart(cart.map((el)=> {
                if (el.categories === 'pizza'){
                    if (item.title === el.title && el.size === item.size){
                        return {...el, count: el.count - 1}
                    } else{
                        return el
                    }
                } else if (item.title === el.title){
                    return {...el, count: el.count - 1}
                } else {
                    return el
                }
            }))
        } else {
            setCart(cart.filter((el)=> {
                if (el.categories === 'pizza'){
                    return el.title !== item.title || el.size !== item.size
                } else{
                    return el.title !== item.title
                }
            }))
        }

    };

    const deleteItem = (title) =>{
        setCart(cart.filter((el)=> {
            return el.title !== title
        }))
    };

    const value = {
        all,
        setAll,
        cart,
        addItem,
        minusOne,
        setCart,
        deleteItem
    };

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
};