import React from "react";
import "../assets/css/components/HomeAbout.css";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="container">
      <div className="section_hero_about flex">
        <div className="hero_about_img flex">
          <img src="./images/design.png" alt="" />
        </div>
        <div className="hero_about_content flex">
          <p className="text">We are here to help you</p>
          <h1 className="main_heading">Get Started Today</h1>
          <p className="text">
            Ready to take the first step towards a more efficient and secure IT
            infrastructure? Contact us today for a free consultation and let's
            discuss how Thapa Technical can help your business thrive in the
            digital age.
          </p>
          <div className="row flex">
            <Link to="/contact">
              <button className="text">Connact Now</button>
            </Link>
            <Link to="/services">
              <button className="text primary-btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
