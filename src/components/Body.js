import RestaurantCard from './RestaurantCard'
import restaurants from '../utils/mockData'
import {useState} from "react";

const Body = () => {
  let [listOfRes, setListOfRes] = useState(restaurants);

  function filterOutTopRatedRes () {
    const filteredList = listOfRes.filter(item => item.info.avgRating > 4.3);
    setListOfRes(filteredList);
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={filterOutTopRatedRes}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {
          listOfRes.map(restaurant => {
            return <RestaurantCard
              resData={restaurant}
              key={restaurant.info.id}
            />
          })
        }
      </div>
    </div>
  )
}

export default Body