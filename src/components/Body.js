import RestaurantCard from './RestaurantCard'
import restaurants from '../utils/mockData'
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import LoadingRestaurantsList from './LoadingRestaurantsList';

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [searchInput, setSearchInput] =  useState("");
  const navigate = useNavigate();

  const filterOutTopRatedRes = () => {
    const filteredList = listOfRes.filter(item => item.info.avgRating > 4.3);
    setListOfRes(filteredList);
  }

  const searchRestaurants = () => {
    const filteredList = listOfRes.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
    setFilteredListOfRes(filteredList)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://4eea5d2b-607c-48f0-bf61-19ac4e7b4111.mock.pstmn.io/restaurants"
    )
    const json = await data.json();
    setListOfRes(json)
    setFilteredListOfRes(json)
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus===false) return (
    <h1>
      Looks like you're offline! plis check your internet
    </h1>
  )

  const goToResMenu = () => {
    navigate('/restaurant/1234')
  }

  if(!filteredListOfRes.length && !searchInput.length) {
    return (
      <div className="res-loader-container">
        {
          [...Array(12)].map((_, index) => {
            return <LoadingRestaurantsList key={index}/>
          })
        }
      </div>
      )
  } else {
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="search"
              placeholder="Search restaurant"
              value={searchInput}
              onChange={(e) => {
                if(!e.target.value.length) {
                  fetchData();
                }
                setSearchInput(e.target.value)
              }}
            />
            <button className="search-btn" onClick={searchRestaurants}>Search</button>
          </div>
          <button
            className="filter-btn"
            onClick={filterOutTopRatedRes}
          >
            Top rated restaurants
          </button>
        </div>
        <div className="res-container">
          {
            !filteredListOfRes.length && searchInput.length ? (<div>No search results</div>):
            (filteredListOfRes.map(restaurant => {
              return (
                <RestaurantCard
                  resData={restaurant}
                  key={restaurant.id}
                  onClick={() => goToResMenu()}
                />
              )
            }))
          }
        </div>
      </div>
    )
  }
}

export default Body