import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_products'


export const ShopContext = createContext(null)

const getDefaultCart = () =>{
        let cart = {};
        for (let index = 0; index < all_products.length+1; index++){
            cart[index] = 0;
        }
        return cart;
       }

const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
        
    }      

     const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }      


    const Contextvalue = {all_products,cartItems,addToCart,removeFromCart}


       return (
        <ShopContext.Provider value={Contextvalue} >
            {props.children}
        </ShopContext.Provider>
       )
}

export default ShopContextProvider
