import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";

export default function PrivateRoutes() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}
