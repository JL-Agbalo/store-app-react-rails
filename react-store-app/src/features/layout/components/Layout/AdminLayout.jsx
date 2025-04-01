import React from "react";
import { PrivateRoute } from "../../../../routes/PrivateRoutes";

const AdminLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="admin-layout">
        <header className="admin-header">
          {/* Add your admin header/navigation here */}
        </header>
        <main className="admin-main">{children}</main>
        <footer className="admin-footer">
          {/* Add your admin footer content here */}
        </footer>
      </div>
    </PrivateRoute>
  );
};

export default AdminLayout;
