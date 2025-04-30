import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser, signInUser, signOutUser, signUpUser } from '../../services/v1/authService';

// Create the context
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true);
      try {
        const response = await getCurrentUser();
        if (response && response.user) {
          setUser(response.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Login function
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await signInUser(email, password);
      if (response.user) {
        setUser(response.user);
        return response.user;
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Signup function
  const signup = async (userData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await signUpUser(userData);
      if (response) {
        setUser(response);
        return response;
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await signOutUser();
      if (response) {
        setUser(null);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Check auth status or refresh after operations
  const refreshUser = async () => {
    try {
      const response = await getCurrentUser();
      if (response && response.user) {
        setUser(response.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    }
  };
  
  // Value to be provided by the context
  const value = {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    refreshUser
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};