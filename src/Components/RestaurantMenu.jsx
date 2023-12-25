import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = React.useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1 className="res-name">{name}</h1>
      <p className="cuisines">
        {cuisines?.join(",")} - {costForTwoMessage}{" "}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategories
          data={category?.card?.card}
          isContentVisible={index === showIndex && true}
          setShowIndex={setShowIndex}
          index={index}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
