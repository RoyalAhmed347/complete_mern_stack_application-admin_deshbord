import React, { useState } from "react";
import "../assets/css/components/ContactSection.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthHook } from "../context/auth";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [message, setMessage] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);
  const navigate = useNavigate();
  const { cruntUser } = useAuthHook();

  

  if (cruntUser && userData) {
    setMessage({
      username: cruntUser.username,
      email: cruntUser.email,
      message: "",
    });
    setUserData(false);
  }

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setMessage((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:3001/api/contect",
        headers: {},
        data: message,
      });

      toast.success(result.data.message);
      navigate("/");
      console.log(result.data);
    } catch (error) {
      toast.error(
        error.response.data.errorDetails
          ? error.response.data.errorDetails
          : error.response.data.message
      );
    }
  };

  return (
    <>
      <section className="container">
        <h1 className="form_heading">Contact Us</h1>
        <div className="contact_container  flex ">
          <div className="contact_img flex">
            <img src="./images/support.png" height="500" alt="register" />
          </div>
          <div className="contact_form flex">
            <form onSubmit={submitData}>
              <div className="form_row ">
                <label className="text" htmlFor="userName">
                  UserName
                </label>
                <br />
                <input
                  className="text"
                  type="text"
                  name="username"
                  id="userName"
                  onChange={inputEvent}
                  value={message.username}
                />
              </div>
              <div className="form_row ">
                <label className="text" htmlFor="email">
                  Email
                </label>
                <br />
                <input
                  className="text"
                  type="text"
                  name="email"
                  id="email"
                  onChange={inputEvent}
                  value={message.email}
                />
              </div>

              <div className="form_row ">
                <label className="text" htmlFor="message">
                  Message
                </label>
                <br />
                <textarea
                  className="text"
                  name="message"
                  id="message"
                  onChange={inputEvent}
                  value={message.message}
                />
              </div>
              <div className="form_row ">
                <button type="submit" className="text">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6797.67608080006!2d74.3689832949819!3d31.583488936423002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ac38818005f%3A0xe1612460de0fb770!2sBaghbanpura%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705850976077!5m2!1sen!2s"
          width="100%"
          height="450"
          // style="border:0;"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ContactSection;
