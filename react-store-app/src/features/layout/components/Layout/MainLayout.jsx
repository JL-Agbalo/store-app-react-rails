import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <header>{/* Add your header/navigation here */}</header>
      <main>
        <Outlet />
      </main>
      <footer>{/* Add your footer here */}</footer>
    </div>
  );
};

export default MainLayout;
