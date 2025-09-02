import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <>
      <div className="shop-category">
        <img src={props.banner} alt="" />
      </div>
    </>
  );
};

export default ShopCategory;
