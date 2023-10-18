import { useState } from 'react';
import { foodImage } from '../utils/constants'
const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Food Logo"
          src={foodImage}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Login</li>
          <li>Cart</li>
          <button onClick={()=>{btnLogin === "Login" ? setbtnLogin("Logout"): setbtnLogin("Login") }}>{btnLogin}</button>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
