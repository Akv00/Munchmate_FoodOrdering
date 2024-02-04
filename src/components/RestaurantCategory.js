import React from "react";
import { useState } from "react";
import ItemsList from "./ItemsList";
const RestaurantCategory = ({ data, showItems, setShowIndex,dummy }) => {
  // console.log(showItems)
  // const [showItems,setShowItems] = useState(false);
  // console.log(data)
  const handleClick = () => {
    // console.log("clicked");
    setShowIndex();
    
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span className="">⏬</span>
        </div>
        {/* {console.log(showItems)} */}
        {showItems && <ItemsList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
