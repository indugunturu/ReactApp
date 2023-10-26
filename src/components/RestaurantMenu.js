import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useReataurantMenu";
import RestaurantCategory from './RestaurantCategory';
const Restaurantmenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  const dummy = "Dummy Data";
  const [showIndex, setShowIndex] = useState(null);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(Menu_API + resId);
  //   const jsonData = await data.json();
  //   setResInfo(jsonData);
  //   console.log(jsonData.data);
  // };
 
 
   if(resInfo === null)  return <Shimmer />;
   const { name, cuisines, costForTwoMessage } =
  resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="menu">
      <h2>{name}</h2>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwoMessage}</h2>
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
      {/* <h2>Menu</h2>
      <ul>
      {itemCards.map((item)=><li>{item.card.info.name}</li>)} */}
        {/* <li>Biryani</li>
        <li>Burger</li> */}
      {/* </ul> */}
    </div>
  );
};

export default Restaurantmenu;
