import "../styles/Footer.scss";
import { FaLinkedinIn, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";

import Pic from "../assets/images/Nezler-Technologies-3.png";
const Footer = () => {
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
        <p>Privacy policies</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
