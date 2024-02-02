import React from "react";
import "../assets/css/components/Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="container">
        <div className="section_hero flex">
          <div className="hero_content flex">
            <p className="text">We are the world best IT company</p>
            <h1 className="main_heading">
              Welcome to <span> Royal Ahmed </span>
            </h1>
            <p className="text">
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Thapa Technical, we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
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
          <div className="hero_img flex">
            <img src="./images/home.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
