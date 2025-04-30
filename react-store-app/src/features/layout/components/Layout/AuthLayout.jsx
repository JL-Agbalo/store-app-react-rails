import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../../../../contexts/auth/useAuth";

const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
