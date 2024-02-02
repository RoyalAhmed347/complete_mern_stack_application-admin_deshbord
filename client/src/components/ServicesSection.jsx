import React, { useEffect, useState } from "react";
import axios from "axios";

import "../assets/css/components/ServicesSection.css";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios({
      method: "get",
      url: "http://localhost:3001/api/data/services",
      headers: {},
    });

    setServices(result.data);
  };

  return (
    <>
      <section className="container">
        <div className="service_container flex">
          <h1 className="form_heading">Services</h1>
          <div className="main_boxs_container flex">
            {services.map((serviec, index) => {
              return (
                <>
                  <div className="serviecs_box" key={index}>
                    <img src="./images/design.png" alt="" srcset="" />
                    <div className="services_content">
                      <div className="service_row">
                        <p className="text">{serviec.provider}</p>
                        <p className="text">
                          ${serviec.startPrice} - ${serviec.endPrice}{" "}
                        </p>
                      </div>
                      <div className="service_row">
                        <h1 className="sub_heading">{serviec.serviceName}</h1>
                      </div>
                      <div className="service_row">
                        <p className="text">{serviec.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
