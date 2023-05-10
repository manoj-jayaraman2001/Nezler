import "../App.scss";
import { useState } from "react";
import logo from "../assets/images/nezler_technologies_logo.png";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [menuOpen, setOpen] = useState(false);

  function handleMenu (){
    setOpen(prevValue => !prevValue)
  }
  return (
    <div className="Navbar">
      <img src={logo} alt="Nezler Technologies Logo" />
      <div onClick={handleMenu} className="menuIcon">
        {menuOpen ? (
          <AiOutlineMenuUnfold/>
        ) : (
          <AiOutlineMenuFold/>
        )}
      </div>
      <ul style={{right: menuOpen ? 0 :  '-300px'}}>
        <li><Link className="link" to = "/" >Home</Link></li>
        <li><Link className="link" to = "About" >About</Link></li>
        <li><Link className="link" to = "Services" >Services</Link></li>
        <li><Link className="link" to = "Joinus" >Join Us</Link></li>
        <li><Link className="link" to = "Contact" >Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
