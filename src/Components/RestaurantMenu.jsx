import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(",")} - {costForTwoMessage}{" "}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((itemCard) => (
            <li key={itemCard?.card?.info?.id}>
              {itemCard?.card?.info?.name} -{" "}
              {itemCard?.card?.info?.price / 100 ||
                itemCard?.card?.info?.defaultPrice / 100}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
