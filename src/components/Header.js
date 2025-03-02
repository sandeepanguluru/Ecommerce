import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const handleClick = () => {
    //Normal Condition
    /*if(btnName === "Login"){
      setBtnName("Logout")
    }else{
      setBtnName("Login")
    }*/
    //Ternary Operator
    {
      btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li> <Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
