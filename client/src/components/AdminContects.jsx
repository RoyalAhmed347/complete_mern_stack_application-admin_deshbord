import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthHook } from "../context/auth";

const AdminContects = () => {
  const [contacts, setContacts] = useState([]);
  const { token } = useAuthHook();

  useEffect(() => {
    getAllContacts();
  }, []);

  const getAllContacts = async () => {
    try {
      const result = await axios({
        method: "get",
        url: "http://localhost:3001/api/admin/contects",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(result.data.contects);
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
            {contacts.map((user, index) => {
              return (
                <tr key={index}>
                  <td className="text">{user.username}</td>
                  <td className="text">{user.email}</td>
                  <td className="text">{user.message}</td>
                  <td className="text">
                    <button className="edit_btn">Edit</button>
                  </td>
                  <td className="text">
                    {" "}
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

export default AdminContects;
