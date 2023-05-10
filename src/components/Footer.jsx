import "../styles/Footer.scss";
import { FaLinkedinIn, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import Pic from "../assets/images/Nezler-Technologies-3.png";
const Footer = () => {

  const navigate = useNavigate()


  function openPoliciy(){
      navigate('/Privacy')
  }
  function openTerms(){
    navigate('/Terms')
  }

  return (
    <div className="Footer">
      <img src={Pic} alt="Nezler Technologies" />
      <div className="socialIcons">
        <FaLinkedinIn className="icon"/>
        <FaYoutube className="icon"/>
        <FaFacebook className="icon"/>
        <FaInstagram className="icon"/>
      </div>
      <div className="terms">
        <div>&copy; 2023 Nezler Technologies LLP. All rights reserved</div>
        <p onClick={openPoliciy}>Privacy policies</p>
        <p onClick={openTerms}>Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
