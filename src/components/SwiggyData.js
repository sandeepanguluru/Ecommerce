import SwiggyCard from "./SwiggyCard";
import { useState, useEffect } from "react";
import { Image_CDN } from "../utils/Constants";
import { Image_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const SwiggyData = () => {
  const [restaurantData, setRestaurentData] = useState([]);
  const [input, setInput] = useState("");
  const [restaurantsData, setRestaurentsData] = useState([]);

  const FilterRest = () => {
    const restFilter = restaurantData.filter((res) => res.info.avgRating > 4.3);
    setRestaurentsData(restFilter);
    console.log(restFilter);
  };
  const filterSearch = (e) => {
    const restFilter = restaurantData.filter((res) =>
      res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRestaurentsData(restFilter);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await api.json();
    console.log(
      json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
      "jsonDataa"
    );
    setRestaurentData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurentsData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <>
      <input type="text" onChange={filterSearch} />
      <button onClick={filterSearch}>Search</button>
      <button className="filter-btn" onClick={FilterRest}>
        Filter
      </button>
      {restaurantsData.length === 0 && <h1>No Restaurents</h1>}
      <div className="swiggyData">
        {restaurantsData.map((restaurants) => (
          <Link
            to={"/restaurents" + restaurants.info.id}
            key={restaurants.info.id}
          >
            <SwiggyCard
              // image={Image_URL}
              image={`${Image_CDN}${restaurants?.info?.cloudinaryImageId}`}
              title={restaurants.info.name}
              price={restaurants.info.costForTwo}
              rating={restaurants.info.avgRating}
              cuisines={restaurants.info.cuisines.join(",")}
              minutes={restaurants.info.sla.slaString}
              location={restaurants.info.areaName}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
export default SwiggyData;
