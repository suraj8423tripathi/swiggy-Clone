import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resCard } = props;
  const cloudinaryImageId = resCard.cloudinaryImageId;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{resCard.name}</h3>
      <h4>{resCard.cuisines.join(",")}</h4>
      <h4>{resCard.avgRating}</h4>
      <h4>{resCard.sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
