import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";

export default function PublicRoutes() {
  const { isAuthenticated } = useAuth();

  // Redirect authenticated users away from signin/signup pages
  if (isAuthenticated && window.location.pathname.match(/\/(signin|signup)$/)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
