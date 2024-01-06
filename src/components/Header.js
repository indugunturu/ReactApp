import { useEffect, useState } from 'react';
import { foodImage } from '../utils/constants';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from "react-redux";
import { loginout } from "../utils/login";
import { useDispatch } from "react-redux";
const Header = () => {
  const [btnLogin, setbtnLogin] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const login = (item) => {
    // Dispatch an action
    if(btnLogin==='LOGIN') {
      setbtnLogin('LOGOUT');
    } else {
      setbtnLogin('LOGIN');
    }
  
    dispatch(loginout(btnLogin));
    console.log('loginnn', item);
  };
  useEffect(()=>{
    console.log('use effect is called');
  }, [btnLogin]);
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img
          className="w-60"
          alt="Food Logo"
          src={foodImage}
        />
      </div>
      <div className="items-center nav-items">
        <ul className='flex p-4 m-4'>
<li>OnlineStatus: {onlineStatus ?  "🟩" : "🔴"}</li>
        <li className=''><Link to="/">Home</Link></li>
         <li className='px-4'><Link to="/about">About</Link></li> 
         <li className='px-4'><Link to="/contact">Contact</Link></li> 
         <li className='px-4'><Link to="/grocary">Grocary</Link></li>
          <li className='px-4'>Login</li>
          <li className='px-4'><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <button onClick={()=>{login('loginout') }}>{btnLogin}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
