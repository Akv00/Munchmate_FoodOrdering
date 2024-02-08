// import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import cards from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  let [listOfRestraunt, setListOfRestraunt] = useState([]);
  let [filteredRestraunt, setFilteredRestraunt] = useState([]);

  let [searchText, setSearchText] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.87560&lng=80.91150&str=fast%20food&trackingId=f72975df-cde9-340e-9364-ee02e6689e40&submitAction=ENTER&queryUniqueId=de8a84b7-7f5e-67d1-9973-e9f1170c57f4"
    );
    const json = await data.json();

    setListOfRestraunt(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  if (useOnlineStatus() === false) {
    return (
      <div>
        <h1>please check your internet</h1>
      </div>
    );
  }
  //Conditional rendering
  if (listOfRestraunt.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-41">
          <input
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // console.log({searchText});
              const filteredRestraunt = listOfRestraunt.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestraunt(filteredRestraunt);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-41 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              const filteredList = listOfRestraunt.filter((card) => {
                if (card.card.card.info.avgRating > 4) return card;
              });
              // console.log(filterRes.map(card => card.card.card.info.name));
              setListOfRestraunt(filteredList);
            }}
          >
            Filter Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestraunt.map((restaurant) => {
          return (
            <Link
              key={restaurant.card.card.info.id}
              to={"/restaurants/" + restaurant.card.card.info.id}
            >
              {restaurant.card.card.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant.card.card.info} />
              ) : (
                <RestaurantCard resData={restaurant.card.card.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
