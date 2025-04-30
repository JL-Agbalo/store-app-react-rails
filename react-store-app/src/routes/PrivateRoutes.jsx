import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/auth/useAuth'; 

export default function PrivateRoutes() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
}