import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/components/AdminUsers.css";
import { IoCloseSharp } from "react-icons/io5";

import { useAuthHook } from "../context/auth";
import { toast } from "react-toastify";
const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [moddalOpen, setmoddalOpen] = useState(false);
  const [createUserModdalOpen, setCreateUserModdalOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    isAdmin: "",
    id: "",
  });
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: "",
  });

  const { token } = useAuthHook();
  useEffect(() => {
    getAllUsers();
  });

  const inputEvent = (e) => {
    const { name, value, checked } = e.target;
    if (e.target.name === "isAdmin") {
      setUser((preVal) => {
        return {
          ...preVal,
          [name]: checked,
        };
      });
    } else {
      setUser((preVal) => {
        return {
          ...preVal,
          [name]: value,
        };
      });
    }
  };

  const newUserInputEvent = (e) => {
    const { name, value, checked } = e.target;
   
    if (e.target.name === "isAdmin") {
      setNewUser((preVal) => {
        return {
          ...preVal,
          [name]: checked,
        };
      });
    } else {
      setNewUser((preVal) => {
        return {
          ...preVal,
          [name]: value,
        };
      });
    }
  };

  const openModal = (_id) => {
    const user = users.find((elem) => {
      return elem._id === _id;
    });
    setUser({
      username: user.username,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      id: user._id,
    });

    setmoddalOpen(true);
  };

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

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      const result = await axios({
        method: "put",
        url: `http://localhost:3001/api/admin/user/${user.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      toast.success(result.data.message);
      setUser({
        username: "",
        email: "",
        phone: "",
        isAdmin: "",
        id: "",
      });
      setmoddalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (_id) => {
    const user = users.find((elem) => {
      return elem._id === _id;
    });
    const deluser = confirm(`Do you want to delete this ${user.username}`);

    if (deluser) {
      try {
        const result = await axios({
          method: "delete",
          url: `http://localhost:3001/api/admin/user/${user._id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success(result.data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:3001/api/auth/register",
        headers: {},
        data: newUser,
      });

      setCreateUserModdalOpen(false)

      toast.success(result.data.message);

  
      setNewUser({
        username: "",
        email: "",
        phone: "",
        password: "",
        isAdmin: false,
      });
      // navigate("/");
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
      <section className="section_deshbord_layout">
        <div className="row">
          <h1 className="main_heading">All Users</h1>
          <button onClick={() => setCreateUserModdalOpen(true)}>
            Add User
          </button>
        </div>
        <div style={{ overflow: "auto" }}>
          <table className="data_table">
            <thead>
              <tr>
                <th className="text">Name</th>
                <th className="text">Email</th>
                <th className="text">Phone</th>
                <th className="text">Role</th>
                <th className="text">Update</th>
                <th className="text">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="text">{user.username}</td>
                    <td className="text">{user.email}</td>
                    <td className="text">{user.phone}</td>
                    <td className="text">{user.isAdmin ? "Admin" : "User"}</td>
                    <td className="text">
                      <button
                        onClick={() => openModal(user._id)}
                        className="edit_btn"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="text">
                      <button onClick={() => deleteUser(user._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {createUserModdalOpen ? (
        <>
          <div className="main_modal center">
            <div
              style={{
                position: "absolute",
                top: "20px",
                cursor: "pointer",
                right: "20px",
                color: "#fff",
              }}
            >
              <IoCloseSharp onClick={() => setCreateUserModdalOpen(false)} size={22} />
            </div>
            <div
              className="register_form flex "
              style={{
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="form_heading">Create New User</h1>
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
                    onChange={newUserInputEvent}
                    value={newUser.username}
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
                    onChange={newUserInputEvent}
                    value={newUser.email}
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
                    onChange={newUserInputEvent}
                    value={newUser.phone}
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
                    onChange={newUserInputEvent}
                    value={newUser.password}
                  />
                </div>

                <label className="text" htmlFor="password">
                  Admin
                  {user.isAdmin ? (
                    <input
                      className="text"
                      type="checkbox"
                      name="isAdmin"
                      id="password"
                      defaultChecked={true}
                      onChange={newUserInputEvent}
                      value={newUser.password}
                    />
                  ) : (
                    <input
                      className="text"
                      type="checkbox"
                      name="isAdmin"
                      id="password"
                      onChange={newUserInputEvent}
                      value={newUser.password}
                    />
                  )}
                </label>
                {/* <br /> */}
                {/* </div> */}
                <div className="form_row ">
                  <button type="submit" className="text">
                    Create User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}

      {moddalOpen ? (
        <>
          <div className="main_modal center">
            <div
              style={{
                position: "absolute",
                top: "20px",
                cursor: "pointer",
                right: "20px",
                color: "#fff",
              }}
            >
              <IoCloseSharp onClick={() => setmoddalOpen(false)} size={22} />
            </div>
            <div
              className="register_form flex "
              style={{
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="form_heading">Update User</h1>
              <form onSubmit={updateUser}>
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

                <label className="text" htmlFor="password">
                  Admin
                  {user.isAdmin ? (
                    <input
                      className="text"
                      type="checkbox"
                      name="isAdmin"
                      id="password"
                      defaultChecked={true}
                      onChange={inputEvent}
                      value={user.password}
                    />
                  ) : (
                    <input
                      className="text"
                      type="checkbox"
                      name="isAdmin"
                      id="password"
                      onChange={inputEvent}
                      value={user.password}
                    />
                  )}
                </label>
                {/* <br /> */}
                {/* </div> */}
                <div className="form_row ">
                  <button type="submit" className="text">
                    Update User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AdminUsers;
