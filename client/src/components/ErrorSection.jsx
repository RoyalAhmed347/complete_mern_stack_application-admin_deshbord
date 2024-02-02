import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/components/ErrorSection.css";

const ErrorSection = () => {
  return (
    <>
      <section className="container">
        <div className="error_section flex">
          <h2 className="error_sub_heading">404</h2>
          <h4>Sorry! Page not found</h4>
          <p className="text error_text">
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="row flex">
            <Link to="/contact">
              <button className="text">Go to Home</button>
            </Link>
            <Link to="/contact">
              <button className="text primary-btn">Report Problem</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorSection;
