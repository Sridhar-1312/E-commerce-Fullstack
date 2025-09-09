import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import { ShopContext } from "../context/ShopContext";
import ProductDisplay from "../Components/ProductsDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  return (
    <>
      <Breadcrums product={product} />
      <ProductDisplay product = {product}/>
      <DescriptionBox />
    </>
  );
};

export default Product;
