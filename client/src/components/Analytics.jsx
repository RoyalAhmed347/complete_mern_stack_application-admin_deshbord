import React from "react";
import "../assets/css/components/Analytics.css";
const Analytics = () => {
  return (
    <section className="container">
      <div className="analytics_section flex">
        <div className="analytic_box center">
          <h2 className="sub_heading">50+</h2>
          <p className="text">Registered Companes</p>
        </div>
        <div className="analytic_box center">
          <h2 className="sub_heading">100.00+</h2>
          <p className="text">Happy Clients</p>
        </div>
        <div className="analytic_box center">
          <h2 className="sub_heading">500+</h2>
          <p className="text">Well Knows Developers</p>
        </div>
        <div className="analytic_box center">
          <h2 className="sub_heading">24/7</h2>
          <p className="text">Service</p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
