import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriotionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box-fade">reviews (122)</div>
      </div>
      <div className="desriptionbox-description">
        <p>
          E-commerce is an online platform for buying and selling products or
          services over the internet. It serves as a virtual marketplace where
          businesses and individuals can showcase their products, interact with
          customers, and conduct transactions without the need for a physical
          presence. E-commerce websites have gained immense popularity due to
          their convenience, accessibility, and global reach.
        </p>
        <p>
          E-commerce websites typically display products or services with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own description
          page, which provides more information such as specifications, customer
          reviews, shipping details, and return policies.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
