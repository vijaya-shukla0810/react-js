import constants from "../utils/constants"
import { useState } from "react";
const Header = () => {
  const [loginLogoutText, setLoginLogoutText] = useState("Login")
  
  const clickLoginLogout = () => {
    setLoginLogoutText(loginLogoutText === "Login" ? "Logout": "Login")
  }

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
        <button className="login" onClick={clickLoginLogout}>{loginLogoutText}</button>
      </div>
    </div>
  )
}

export default Header
  