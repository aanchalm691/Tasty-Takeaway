import { useState } from "react";
import {LOGO_URL} from "../utils/constant";
// import logo from "../assets/main-logp.png"; 
const Header = () => {
const [btnReact, setbtnReact] = useState("Login")
    return (
      <div className="header">
        <div className="container">
          <div className="navbar">
              <div className="logo-container">
              {/* <img src={logo} alt="Tasty Takeaway Logo" className="logo" /> */}
              <img src={LOGO_URL}
                  alt="Tasty Takeaway Logo" className="logo"/>
                  <span>Tasty Takeaway</span>
              </div>
              <div className="nav-items">
                <ul>
                  <li className="active">Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Cart</li>
                  <button className="btn login-btn" onClick={()=>{
                    btnReact === "Login" ? setbtnReact("Logout") : setbtnReact("Login")
                  }}>{btnReact}</button>
                </ul>
                  
              </div>
            </div>
        </div>
      </div>
    );
  };

  export default Header;