import constants from "../utils/constants"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginLogoutText, setLoginLogoutText] = useState("Login")
  
  const clickLoginLogout = () => {
    setLoginLogoutText(loginLogoutText === "Login" ? "Logout": "Login")
  }

  useEffect(() => {
  },[loginLogoutText]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={constants.LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact Us</Link></div>
        <div>Cart</div>
        <button className="login" onClick={clickLoginLogout}>{loginLogoutText}</button>
      </div>
    </div>
  )
}

export default Header
  