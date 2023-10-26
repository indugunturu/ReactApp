import {CDN_URL} from "../utils/constants"
const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    // deliveryTime,
  } = resData;
  return (
    <div  className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className=" rounded-md" alt="Rest logo" src={CDN_URL+ cloudinaryImageId} />
      <h6 className="font-bold py-4 text-lg">{name}</h6>
      <h6>{cuisines.join(",")}</h6>
      <h6>{avgRating} stars</h6>
      <h6>{costForTwo} for two</h6>
      {/* <h6>{deliveryTime} minitues</h6> */}
    </div>
  );
};
export const withPromotedLabel = (RestaurentCard)=>{
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
}
export default RestaurentCard;
