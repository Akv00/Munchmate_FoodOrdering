import image from "../utils/images/munchmate-high-resolution-logo-transparent.png";
import { useState } from "react";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={image} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li>
              <button className="login-btn" onClick={()=>{
                btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
              }}>{btnNameReact}</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header