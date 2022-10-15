import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <span>All Rights Reserved &copy; </span>
      <span>2022 - {new Date().getFullYear()}</span>
      <span>Developed by</span>
      <a href="https://delaricch.netlify.app" target="_blank" rel="noreferrer">
        Dela Ricch
      </a>
    </footer>
  );
};

export default Footer;
