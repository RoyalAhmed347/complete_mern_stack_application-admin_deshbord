import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthHook } from "../context/auth";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminSideBar from "./AdminSideBar";

export function LoginLayout() {
  const { isLoggedIn } = useAuthHook();
  const location = useLocation();

  return !isLoggedIn ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
export function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export function AdminLayout({ childern }) {
  const { isLoggedIn } = useAuthHook();
  const location = useLocation();

  return isLoggedIn ? (
    <>
      <AdminSideBar childern={childern} />
      {/* <Navigate to="admin/deshbord" state={{ from: location }} replace /> */}
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
