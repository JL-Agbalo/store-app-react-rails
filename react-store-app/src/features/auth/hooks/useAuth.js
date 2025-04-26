import { useState, useEffect } from "react";
import { signOutUser } from "../../../services/v1/authService";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    try {
      await signOutUser();
      setUser(null);
      return true;
    } catch (error) {
      console.error("Logout failed:", error);
      return false;
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