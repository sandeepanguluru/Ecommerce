import { useState, useEffect } from "react";
import SwiggyItem from "./SwiggyItem";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/Constants";
const SwiggyInfo = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [restInfoCards, setRestInfoCards] = useState([]);
  const { resId } = useParams();
  console.log(resId,"res")
  useEffect(() => {
    fetchAPi();
  }, []);

  // const API_URL =`${Menu_API} ${resId}`
  const fetchAPi = async () => {
    const apiData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=" + resId);
    const data = await apiData.json();
    console.log(data, "json");
    setRestInfo(data?.data?.cards[2]?.card?.card?.info || []);

    // setRestInfoCards(
    //   data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
    // );
  };

  //   const { name, cuisines, avgRating, totalRatingsString, costForTwoMessage } =restInfo?.cards[2]?.card?.card?.info

  return restInfo === null ? (
    <h1>loading...</h1>
  ) : (
    <>
      <div>
        <SwiggyItem
          name={restInfo.name}
          cuisines={restInfo?.cuisines.join(",")}
          costForTwoMessage={restInfo.costForTwoMessage}
          ratings={restInfo?.avgRatingString}
        />
      </div>
      {/* {restInfoCards.map((i)=>{
        return(
          <>
          <SwiggyItem
          categorieslist={i?.cards?.[0]?.card?.card?.title}
          />
          </>
        )
      })} */}
    </>
  );
};
export default SwiggyInfo;
