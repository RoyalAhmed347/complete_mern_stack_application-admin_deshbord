import React, { useState } from "react";
import "../assets/css/components/RegisterForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthHook } from "../context/auth";
import { toast } from "react-toastify";
const RegisterForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const { setCookieToken } = useAuthHook();

  const navigate = useNavigate();

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setUser((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:3001/api/auth/register",
        headers: {},
        data: user,
      });


      toast.success(result.data.message);
      setCookieToken(result.data.token);
      toast.success("login succesful");

      setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
      });
      navigate("/");
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
        <div className="register_container  flex ">
          <div className="register_img flex">
            <img src="./images/register.png" height="500" alt="register" />
          </div>
          <div className="register_form flex">
            <h1 className="form_heading">Registration Form</h1>
            <form onSubmit={createUser}>
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
                  value={user.username}
                />
              </div>
              <div className="form_row ">
                <label className="text" htmlFor="email">
                  Email
                </label>
                <br />
                <input
                  className="text"
                  type="email"
                  name="email"
                  id="email"
                  onChange={inputEvent}
                  value={user.email}
                />
              </div>
              <div className="form_row ">
                <label className="text" htmlFor="phone">
                  Phone
                </label>
                <br />
                <input
                  className="text"
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={inputEvent}
                  value={user.phone}
                />
              </div>
              <div className="form_row ">
                <label className="text" htmlFor="password">
                  Password
                </label>
                <br />
                <input
                  className="text"
                  type="password"
                  name="password"
                  id="password"
                  onChange={inputEvent}
                  value={user.password}
                />
              </div>
              <div className="form_row ">
                <button type="submit" className="text">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
