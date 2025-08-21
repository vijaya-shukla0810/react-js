const RestaurantCard = (props) => {
  const { resData } = props;
  // const {
  //   name,
  //   cuisines,
  //   avgRating,
  //   costForTwo,
  //   deliveryTime
  // } = resData?.info
  const {
    name,
    cuisine,
    hasTakeout,
  } = resData

  return (
    <div className="res-card" style={{
      backgroundColor: "beige"
    }}>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/7a7eeb27-4319-4670-a64e-0f214d6c92e8_952468.JPG"
        className="res-card-img"
        alt="res-img"
      ></img>
      <h3>{name}</h3>
      {/* <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} min</h4> */}
      <h4>{cuisine}</h4>
      <h4>{hasTakeout? 'Deliverable': 'Not deliverable'}</h4>
    </div>
  )
}

export default RestaurantCard