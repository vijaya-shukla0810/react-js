import restaurant from "../utils/mockData"
import { useEffect, useState } from "react";


const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    // commenting as not able to use api
    // fetchData()
    setResInfo(restaurant)
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json)
  // }
  return resInfo;
}

export default useRestaurantMenu;