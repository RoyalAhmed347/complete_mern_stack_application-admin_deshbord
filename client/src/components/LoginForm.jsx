import React, { useState } from "react";
import axios from "axios";
import "../assets/css/components/LoginForm.css";
import { useAuthHook } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
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

  const submitUserData = async (e) => {
    e.preventDefault();

    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:3001/api/auth/login",
        headers: {},
        data: user,
      });

      setCookieToken(result.data.token);

      toast.success(result.data.message);
      
      setUser({
        email: "",
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
        <div className="login_container  flex ">
          <div className="login_img flex">
            <img src="./images/login.png" height="500" alt="register" />
          </div>
          <div className="login_form flex">
            <h1 className="form_heading">Login Form</h1>
            <form onSubmit={submitUserData}>
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
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
