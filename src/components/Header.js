import constants from "../utils/constants"
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginLogoutText, setLoginLogoutText] = useState("Login")
  
  const clickLoginLogout = () => {
    setLoginLogoutText(loginLogoutText === "Login" ? "Logout": "Login")
  }

  useEffect(() => {
  },[loginLogoutText]);

  const isOnline = useOnlineStatus()
  return (
    <div className="flex justify-between shadow-lg mb-8">
      <div className="logo-container">
        <img className="w-40" src={constants.LOGO_URL}></img>
      </div>
      <div className="flex gap-4 mt-16 mr-16">
        <div>Online: {isOnline ? "✅" : "🔴"}</div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact Us</Link></div>
        <div><Link to="/grocery">Grocery</Link></div>
        <div>Cart</div>
        <div>
          <button className="rounded-sm hover:bg-gray-100 cursor-pointer" onClick={clickLoginLogout}>{loginLogoutText}</button>
        </div>
      </div>
    </div>
  )
}

export default Header
  