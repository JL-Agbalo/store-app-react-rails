/* eslint-disable no-useless-catch */
import { ENDPOINTS } from "./endpoints";

export const signInUser = async (email, password) => {
  try {
    const response = await fetch(ENDPOINTS.AUTH.SIGNIN, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.message || "Failed to sign in");
    }

    return data; // Return full response to access status and user
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  console.log("Fetching current user...");
  try {
    const response = await fetch(ENDPOINTS.AUTH.ME, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to get user");
    }

    return data.user;
  } catch (error) {
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
