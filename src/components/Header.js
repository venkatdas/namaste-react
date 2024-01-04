import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { React } from "react";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";

const Header = () => {
  const [btnName, setbtnName] = useState("login");

  const isOnline = useStatusOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <div className="nav-items">
          <ul>
            <li>Online Status : {isOnline ? "✔" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button
              className="btn-name"
              onClick={() => {
                btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
