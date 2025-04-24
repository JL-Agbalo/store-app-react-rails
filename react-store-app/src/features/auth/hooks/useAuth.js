import { useState, useEffect } from "react";
import { getCurrentUser, signOutUser } from "../../../services/v1/authService";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user data on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const logout = async () => {
    try {
      await signOutUser();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return {
    user,
    setUser,
    isLoading,
    isAuthenticated: !!user,
    logout,
  };
};
