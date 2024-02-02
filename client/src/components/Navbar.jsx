import React, { useReducer, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/css/components/Navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useAuthHook } from "../context/auth";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const { isLoggedIn, cruntUser } = useAuthHook();
  return (
    <>
      <nav className="container">
        <div className="container row main_navbar">
          <div className="brand_logo">
            <Link to="/">
              <h3 className="logo_text">Royal Ahmed</h3>
            </Link>
          </div>
          <div className="top_menu">
            <ul
              className={isOpen ? "nav_menu nav_active flex" : "nav_menu flex"}
            >
              <li>
                <NavLink
                  onClick={() => setisOpen(false)}
                  className="text"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setisOpen(false)}
                  className="text"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setisOpen(false)}
                  className="text"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setisOpen(false)}
                  className="text"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>

              {cruntUser.isAdmin && (
                <NavLink
                  onClick={() => setisOpen(false)}
                  className=" text"
                  to="/admin/deshbord"
                >
                  <button className="text">Admin</button>
                </NavLink>
              )}

              {isLoggedIn ? (
                <NavLink
                  onClick={() => setisOpen(false)}
                  className=" text"
                  to="/logout"
                >
                  <button className="text">Logout</button>
                </NavLink>
              ) : (
                <>
                  <NavLink
                    onClick={() => setisOpen(false)}
                    className=" text"
                    to="/register"
                  >
                    <button className="text">Register</button>
                  </NavLink>
                  <NavLink
                    onClick={() => setisOpen(false)}
                    className="text"
                    to="/login"
                  >
                    <button className="text">Login</button>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          <div className="manu_btn">
            {isOpen ? (
              <IoMdClose onClick={() => setisOpen(!isOpen)} size={25} />
            ) : (
              <IoMenu onClick={() => setisOpen(!isOpen)} size={25} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
