import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/components/AboutSection.css";
import { useAuthHook } from "../context/auth";
const AboutSection = () => {
  const { cruntUser } = useAuthHook();
  return (
    <>
      <section className="container">
        <div className="section_about flex">
          <div className="about_content flex">
            <p className="text">
              Welcome to {cruntUser ? cruntUser.username : `our Website`}
            </p>
            <h1 className="main_heading">
              Why <span> Chose Us? </span>
            </h1>
            <p className="text pera">
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <p className="text pera">
              Customization: We understand that every business is unique. That's
              why we create solutions that are tailored to your specific needs
              and goals.
            </p>
            <p className="text pera">
              Customer-Centric Approach: We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>
            <p className="text pera">
              Affordability: We offer competitive pricing without compromising
              on the quality of our services.
            </p>
            <p className="text pera">
              Reliability: Count on us to be there when you need us. We're
              committed to ensuring your IT environment is reliable and
              available 24/7.
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
          <div className="about_img flex">
            <img src="./images/about.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
