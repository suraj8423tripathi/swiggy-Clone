import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = React.useState(null);
  const { resId } = useParams();
  const temp = MENU_API + resId;
  console.log({ temp });

  React.useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `${MENU_API}restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  console.log({ resInfo });
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
