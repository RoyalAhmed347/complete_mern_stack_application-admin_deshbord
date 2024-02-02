import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../assets/css/components/AdminSideBar.css";
import { IoMenu, IoHome } from "react-icons/io5";
import { MdOutlineElectricalServices } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const menu = [
  {
    path: "deshbord",
    icon: <IoHome size={20} />,
    title: "Deshbord",
  },
  {
    path: "users",
    icon: <FaUsers size={20} />,
    title: "Users",
  },
  {
    path: "contects",
    icon: <MdContactPhone size={20} />,
    title: "Contects",
  },
  {
    path: "services",
    icon: <MdOutlineElectricalServices size={20} />,
    title: "Services",
  },
];

const AdminSideBar = ({ childern }) => {
  const [toggel, settoggel] = useState(true);
  return (
    <>
      <div className="container">
        <div className=" flex main_sidebar_section ">
          <aside
            style={
              !toggel
                ? { width: "230px", transition: "all .5s ease" }
                : { width: "50px", transition: "all .5s ease" }
            }
            className="section_navbar"
          >
            <div className="top_bar flex">
              <div className="brand_Logo">
                <NavLink to="/">{!toggel && <h3>Royal Ahmed</h3>}</NavLink>
              </div>
              <div className="toggler">
                <IoMenu
                  size={25}
                  onClick={() => settoggel(!toggel)}
                  className="togglerBtn"
                />
              </div>
            </div>
            <div className="menu">
              {menu.map((elem, index) => {
                return (
                  <NavLink
                    className="route_link flex"
                    to={"admin/" + elem.path}
                    key={index}
                  >
                    {toggel ? (
                      <>
                        <div className="icon">{elem.icon}</div>
                      </>
                    ) : (
                      <>
                        <div className="icon">{elem.icon}</div>
                        <p className="text">{elem.title}</p>
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </aside>
          <main>
            {childern}
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
