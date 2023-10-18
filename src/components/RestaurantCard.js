import {CDN_URL} from "../utils/constants"
const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudnaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    delivaryTime,
  } = resData;
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="Rest logo" src={CDN_URL+ cloudnaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo/100} FOR TWO</h4>
      <h4>{delivaryTime} minitues</h4>
    </div>
  );
};
export default RestaurentCard;
