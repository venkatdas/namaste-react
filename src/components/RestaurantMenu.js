import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import {useParams} from 'react-router-dom'
import { useParams } from "react-router-dom";
import useRestauratMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resMenuData, setResMenuData] = useState(null);

   const { resId } = useParams();
  const resMenuData= useRestauratMenu(resId)

  // console.log("restaurant menu is rendering");
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
  //       resId +
  //       "&catalog_qa=undefined&submitAction=ENTER"
  //   );

  //   const response = await data.json();
  //   setResMenuData(response?.data);

  //   console.log("rs", response);
  // };

  if (resMenuData === null) return <Shimmer />;

  const { name, city, cuisines } =
    resMenuData?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div className="res-info">
      <h1>{name}</h1>
      <h2>{city}</h2>
      <p> {cuisines.join(", ")}</p>
      <ul>
        {itemCards.map((res) => {
          return (
            <div key={res.card.info.id}>
              <li>
                {res.card.info.name}- Rs {res.card.info.price/100} /-
              </li>
             
            </div>
          );
        })}
        <li>ffsd</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
