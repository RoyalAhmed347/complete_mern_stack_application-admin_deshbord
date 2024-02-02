import React from "react";
import "../assets/css/components/Footer.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <footer className="center container footer_box">
        <p className="text">© Royal Ahmed {year}</p>
      </footer>
    </>
  );
};

export default Footer;
