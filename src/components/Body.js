// import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import cards from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  let [listOfRestraunt, setListOfRestraunt] = useState([]);
  let [filteredRestraunt, setFilteredRestraunt] = useState([]);

  let [searchText, setSearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.8466937&lng=80.94616599999999&str=Fast%20Food&trackingId=6816e21b-5316-f2d4-bd7e-a34dd7f1cde0&submitAction=ENTER&queryUniqueId=9ff0d9b4-247f-76a1-480f-925c6ce417af"
    );
    const json = await data.json();

    setListOfRestraunt(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  //Conditional rendering
  if (listOfRestraunt.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestraunt.map((restaurant) => {
          return (
            <Link key={restaurant.card.card.info.id} to={"/restaurants/"+restaurant.card.card.info.id}><RestaurantCard
              resData={restaurant.card.card.info}
            /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
