import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c?.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  // console.log(categories);
  //
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}
        {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            if (index === showIndex){setShowIndex(null)}
            else {
              setShowIndex(index);
            }
          }}
          dummy = {dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
