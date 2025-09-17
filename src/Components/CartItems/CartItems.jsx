import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="CartItems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products?.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src=""
                  className="cartitems-remove-icon"
                  onClick={() => removeFromCart(e.id)}
                  alt="remove"
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
