import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const logout = () => {
    setUser(null);
    // Add logout logic here
  };

  return {
    user,
    isLoading,
    error,
    setUser,
    setIsLoading,
    setError,
    logout,
    isAuthenticated: true,
  };
};
