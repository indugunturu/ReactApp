import RestaurentCard, {withPromotedLabel} from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let resData1 = [
    {
      data: {
        id: "1",
        name: "KFC",
        cuisines: ["pizza", "burger"],
        costForTwo: 40000,
        deliveryTime: 30,
        avgrating: "4",
      },
    },
    {
      data: {
        id: "2",
        name: "KFC1",
        cuisines: ["pizza", "burger"],
        costForTwo: 40000,
        deliveryTime: 30,
        avgrating: "1",
      },
    },
  ];
  const RestaurantCardPromoted= withPromotedLabel(RestaurentCard);
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(resList);
    console.log(resList);
  };
  //  if(resData.length === 0) {
  //   return <Shimmer/>
  //  }
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) 
  return (
<h1>Looks you are offline, Checke your internet connection</h1>
    );
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black" 
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="px-4 py-2 m-4 rounded-lg bg-green-400"
            onClick={() => {
              const filteredRes = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-200 m-4 rounded-md"
          onClick={() => {
            setFilteredRes(
              ( res = filteredRes.filter((res) => res.info.avgRating > 4.5))
            );
            console.log(res);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      </div>
      <div className="flex flex-wrap">
        {!!filteredRes &&
          filteredRes.map((restaurant) => (
          <Link  key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}>
          {restaurant.info.isOpen ? (<RestaurantCardPromoted  resData={restaurant?.info} />) : (<RestaurentCard resData={restaurant?.info}/>)}</Link>  
          ))}
      </div>
    </div>
  );
};

export default Body;
