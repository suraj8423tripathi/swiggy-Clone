import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = React.useState("LogIn");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <Link to="./">
            <li>Home</li>
          </Link>
          <Link to="./about">
            <li>About Us</li>
          </Link>
          <Link to="./contact">
            <li>Contact Us</li>
          </Link>
          <Link to="./grocery">
            <li>Grocery</li>
          </Link>
          <Link to="./cart">
            <li>Cart</li>
          </Link>
          <button
            className="login"
            onClick={() => {
              setBtnName(btnName === "LogOut" ? "LogIn" : "LogOut");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
