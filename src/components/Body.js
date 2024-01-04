import RestaurantCard from "./RestaurantCard";
import resList from "../utils/sampleData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestroData, setFilterRestroData] = useState([]);
  const handleFilterData = () => {
    let filterData = restaurants.filter((res) => res.info.avgRating > 4.2);
    console.log("filterDataaaaaaa", filterData);
    setFilterRestroData(filterData); // Changed from setRestaraunts to setFilterRestroData because of TOP rated restaraunts button
  };
  useEffect(() => {
    console.log("useEffect is called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestroData(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    console.log(response);
  };

  const isOnline = useStatusOnline();
  if (isOnline === false) return <h1>Please check your internet</h1>;

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search For Restaraunts"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={() => {
              const filteredRestaurants = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterRestroData(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilterData}>
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRestroData.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              <RestaurantCard key={res.info.id} resultObj={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
