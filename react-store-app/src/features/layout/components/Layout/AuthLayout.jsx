import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../auth/hooks/useAuth";

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
