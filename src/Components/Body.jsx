import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = React.useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const clickHandler = () => {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4
    );
    setListOfRestaurants(filteredRestaurants);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log({ data });
    const json = await data.json();
    console.log(json);
    const { cards } = json.data;
    const restaurantInfo = cards.filter(
      (item) => item?.card?.card?.id === "restaurant_grid_listing"
    );
    const restaurantsList = restaurantInfo.map(
      (item) => item?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const restaurantsList1 = restaurantsList[0].map((item) => item.info);
    setListOfRestaurants(restaurantsList1);
    setFilteredRestaurants(restaurantsList1);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return <h1>You are offline...Please connect to the internet</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={clickHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((resCard) => (
          <Link to={"/restaurants/" + resCard.id} key={resCard.id}>
            {" "}
            <RestaurantCard key={resCard.id} resCard={resCard} />
          </Link>
        ))}
      </div>
    </div>
  );
};
// using key here is very important because if we will not use unique keys let say if any new component came it will re-render everything again but that should not happen.
export default Body;

//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/btea7jwuwkbgd0nebcyd
