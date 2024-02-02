import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthHook } from "../context/auth";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const { token } = useAuthHook();

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    try {
      const result = await axios({
        method: "get",
        url: "http://localhost:3001/api/admin/services",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServices(result.data.services);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section_deshbord_layout">
      <h1 className="main_heading">All Contacts</h1>
      <div style={{ overflow: "auto" }}>
        <table className="data_table">
          <thead>
            <tr>
              <th className="text">Name</th>
              <th className="text">Email</th>
              <th className="text">Phone</th>
              <th className="text">Update</th>
              <th className="text">Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map((user, index) => {
              return (
                <tr key={index}>
                  <td className="text">{user.serviceName}</td>
                  <td className="text">{user.startPrice}</td>
                  <td className="text">{user.endPrice}</td>

                  <td className="text">{user.provider}</td>
                  <td className="text">{(user.description).slice(0, 30)}...</td>
                  <td className="text">
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminServices;
