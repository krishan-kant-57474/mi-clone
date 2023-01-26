import React from "react";
import "../Styles/NavCard.css";

const NavCard = ({ name, price, image,index}) => {
  console.log(name+"c1");
  return (
    <div className="navCard">
      <img src={image} alt={`${index} phone`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default NavCard;
