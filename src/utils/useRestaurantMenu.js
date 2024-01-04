import { useState,useEffect } from "react";

const useRestauratMenu = (resId) => {
  const [resMenuData, setResMenuData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const response = await data.json();
    setResMenuData(response?.data);

    console.log("rs", response);
  };
  return resMenuData;
};
export default useRestauratMenu
