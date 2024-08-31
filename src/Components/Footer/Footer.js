import React from "react";
import "./Footer.css";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="cpyright">
      <FaCopyright />
      <span>All Rights Reserved</span>
    </div>
  );
};

export default Footer;
