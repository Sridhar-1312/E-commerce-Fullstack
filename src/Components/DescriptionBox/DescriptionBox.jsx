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
        E-commerce refers to the process of purchasing and selling goods or services through digital platforms. It allows businesses and consumers to connect online, making transactions faster and more efficient. Through e-commerce websites, users can explore product catalogs, compare prices, read reviews, and complete purchases with just a few clicks. This modern form of trade has transformed traditional shopping by offering convenience, variety, and accessibility to a global audience.

        </p>
        <p>
        Portfolio websites usually showcase an individuals or companys work, achievements, and skills. They often include project galleries, case studies, client testimonials, and an “About” section. Each project typically has its own page with detailed descriptions, visuals, technologies used, and outcomes to demonstrate expertise and experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
