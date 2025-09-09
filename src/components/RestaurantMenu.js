import LoadingRestaurantsList from "./LoadingRestaurantsList";
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams()
  console.log(resId)

  const resInfo = useRestaurantMenu(resId);

  if(resInfo === null) return <LoadingRestaurantsList/>;

  const { name, cuisines, costForTwo } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="ml-[30]">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - { costForTwo } for two</p>
      <h2>Menu</h2>
      {itemCards.map(item => {
        return (
          <ul key={item.card.info.id}>
            <li>{item.card.info.name}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default RestaurantMenu;