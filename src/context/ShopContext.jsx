import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_products'


export const ShopContext = createContext(null)

const getDefaultCart = () =>{
        let cart = {};
        for (let index = 0; index < all_products.length; index++){
            cart[index] = 0;
        }
        return cart;
       }

const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState(getDefaultCart());
       const Contextvalue = {all_products,cartItems}


       

       return (
        <ShopContext.Provider value={Contextvalue} >
            {props.children}
        </ShopContext.Provider>
       )
}

export default ShopContextProvider
