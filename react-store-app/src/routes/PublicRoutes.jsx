import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth/useAuth";

export default function PublicRoutes() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  // Redirect authenticated users away from signin/signup pages
  if (isAuthenticated && window.location.pathname.match(/\/(signin|signup)$/)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}