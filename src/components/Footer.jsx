import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <h3>Reach Us</h3>
      </div>

      <div className="footer-center">
        <a href="#"><MdLocationOn /></a>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTripadvisor /></a>
      </div>

      <div className="footer-right">
        Copyright © 2023 vishwamevakutumbakam.com™. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;