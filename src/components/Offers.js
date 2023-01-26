import React from "react";
import Offer from "./Offer.js";
import "../Styles/offers.css";

const Offers = ({ offer }) => {
  return (
    <div className="offerSection">
      {offer.map((item, index) => (
        <Offer
          key={item.image}
          index={index}
          src={item.image}
          link={item.url}
        ></Offer>
      ))}
    </div>
  );
};

export default Offers;
