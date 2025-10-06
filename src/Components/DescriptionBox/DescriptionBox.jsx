import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade ">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          E-commerce is an online platform for buying and selling products or
          services over the internet. It serves as a virtual marketplace where
          businesses and individuals can showcase their products, interact with
          customers, and conduct transactions without the need for a physical
          presence. E-commerce websites have gained immense popularity due to
          their convenience, accessibility, and global reaches.
        </p>
        <p>
        Portfolio websites usually showcase an individuals or companys work, achievements, and skills. They often include project galleries, case studies, client testimonials, and an “About” section. Each project typically has its own page with detailed descriptions, visuals, technologies used, and outcomes to demonstrate expertise and experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
