import React from "react";
import "./app.css";
import "./assets/css/media_qurey.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { About, Contact, Error, Home, Login, Register, Service } from "./pages";

import Logout from "./pages/Logout";
import {
  AdminLayout,
  Layout,
  LoginLayout,
} from "./components/PrivateComponent";
import Deshbord from "./pages/admin/Deshbord";
import Contects from "./pages/admin/Contects";
import Services from "./pages/admin/Services";
import Users from "./pages/admin/Users";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />
            <Route element={<LoginLayout />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin">
              <Route path="deshbord" element={<Deshbord />} />
              <Route path="users" element={<Users />} />
              <Route path="contects" element={<Contects />} />
              <Route path="services" element={<Services />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
