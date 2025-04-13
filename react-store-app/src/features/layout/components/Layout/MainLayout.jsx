import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = ({ isAuthenticated, currentUser, setIsAuthenticated }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        setIsAuthenticated={setIsAuthenticated}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
