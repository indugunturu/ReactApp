import RestaurentCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';
import Shimmer from './Shimmer';
const Body = () => {
  let resData1 = [{
    data: {
      id: '1',
      name: "KFC",
      cuisines : ["pizza", "burger"],
      costForTwo: 40000,
      deliveryTime: 30,
      avgrating: "4"
    }},
   { data: {
      id: '2',
      name: "KFC1",
      cuisines : ["pizza", "burger"],
      costForTwo: 40000,
      deliveryTime: 30,
      avgrating: "1"
    }
  }]
  const [resData, setResData] = useState([]);
  useEffect(()=>{
fetchData(); 
  },[]) 
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
        console.log(resList);
  };
//  if(resData.length === 0) {
//   return <Shimmer/>
//  }
  return resData.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
      <button className="filter-btn" onClick={()=>{ setResData (resData1=resData.filter(
        (res)=>res.info.avgRating > 4.5
      ));
      console.log(resData);
      }} >Top Rated Restaurant
      </button>
      </div>
      <div className="res-container">
      {!!resData && resData.map((restaurant) => (
          <RestaurentCard  resData={restaurant?.info} />
        ))}
        
      </div>
    </div>
  );
};

export default Body;
