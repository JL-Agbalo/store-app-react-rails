import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
const MainLayout = ({ isAuthenticated }) => {
  return (
    <div className="min-h-screen">
      <Navbar isAuthenticated={isAuthenticated} />
      <main>
        <Outlet />
      </main>
      <footer>{/* Add your footer here */}</footer>
    </div>
  );
};

export default MainLayout;
