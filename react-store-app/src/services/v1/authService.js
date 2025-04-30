/* eslint-disable no-useless-catch */
import { ENDPOINTS } from "./endpoints";

export const signUpUser = async (data) => {
  try {
    const response = await fetch(ENDPOINTS.AUTH.SIGNUP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ user: data }),
    });

    const result = await response.json();

    if (!response.ok) {
      if (result.errors && result.errors.includes("Email has already been taken")) {
        throw new Error("Email already registered");
      }
      throw new Error(result.errors ? result.errors.join(", ") : "Signup failed");
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    const response = await fetch(ENDPOINTS.AUTH.SIGNIN, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Pass backend error message to the hook
      throw new Error(data.error || "Sign in failed");
    }

    return data; // Should include { user, message }
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  console.log("Fetching current user...");
  try {
    const response = await fetchWithRefresh(ENDPOINTS.AUTH.ME, {
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log("Current user data:", data);
    if (!response.ok) {
      throw new Error("Failed to get user");
    }

    return data; 
  } catch (error) {
    console.error("Get current user error:", error);
    return null;
  }
};

export const signOutUser = async () => {
  try {
    const response = await fetch(ENDPOINTS.AUTH.SIGNOUT, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Failed to sign out");
    }

    return true;
  } catch (error) {
    console.error("Signout error:", error);
    throw error;
  }
};

export const fetchWithRefresh = async (url, options = {}) => {
  console.log("Refreshing token...");
  // Always include credentials for cookies
  const fetchOptions = { ...options, credentials: "include" };

  let response = await fetch(url, fetchOptions);

  if (response.status === 401) {
    // Try to refresh the token
    const refreshRes = await fetch(ENDPOINTS.AUTH.REFRESH, {
      method: "POST",
      credentials: "include",
    });

    if (refreshRes.ok) {
      // Retry the original request after refreshing
      response = await fetch(url, fetchOptions);
    }
  }

  return response;
};