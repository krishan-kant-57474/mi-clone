import React from "react";
import ProductReviewsCard from "./ProductReviewsCard.js";
import "../Styles/ProductReviews.css";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="ProductReviews">
      {productReviews.map((item, index) => (
        <ProductReviewsCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          key={item.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
