import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthHook } from "../context/auth";

const AdminDeshbord = () => {
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const { token } = useAuthHook();
  useEffect(() => {
    getAllUsers();
    getAllServices();
  }, []);

  const getAllUsers = async () => {
    try {
      const user = await axios({
        method: "get",
        url: "http://localhost:3001/api/admin/users",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(user.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllServices = async () => {
    try {
      const service = await axios({
        method: "get",
        url: "http://localhost:3001/api/admin/services",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServices(service.data.services);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section_deshbord_layout">
      <h1 className="main_heading">Admin Deshbord</h1>
      <br />
      <div className="">
        <h2 className="sub_heading">Total User</h2>
        <h2 className="sub_heading">{users.length}</h2>
      </div>
      <div className="">
        <h2 className="sub_heading">Total Services</h2>
        <h2 className="sub_heading">{services.length}</h2>
      </div>
    </section>
  );
};

export default AdminDeshbord;
