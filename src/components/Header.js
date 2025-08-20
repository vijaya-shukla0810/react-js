import constants from "../utils/constants"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={constants.LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <div>Home</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Cart</div>
      </div>
    </div>
  )
}

export default Header
  