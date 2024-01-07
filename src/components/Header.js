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
      <div className="flex justify-between bg-pink-200 shadow-lg m-3 mb-4">
        <img className="w-40" src={LOGO_URL} />
        <div className="flex items-center ">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status : {isOnline ? "✔" : "🔴"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>

            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
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
