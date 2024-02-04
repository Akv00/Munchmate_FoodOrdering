import { CDN_URL } from "../utils/constant.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    costForTwoMessage
  } = resData;
  const { deliveryTime } = resData.sla;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-200 rounded-lg">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime + " minutes"}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwoMessage}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
