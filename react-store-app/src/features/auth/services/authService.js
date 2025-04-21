import { users } from "../data/usersData";
import { getUserProfileById } from "./userService";

export const signInUser = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    throw new Error("Email not found");
  }

  const profile = getUserProfileById(user.id);

  const userData = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    roleId: user.roleId,
    profile: {
      phone: profile?.phone || null,
      avatar: profile?.avatar_url || null,
      address: profile?.address || null,
      city: profile?.city || null,
      state: profile?.state || null,
      postalCode: profile?.postal_code || null,
      country: profile?.country || null,
    },
  };

  // Store authenticated user
  localStorage.setItem("user", JSON.stringify(userData));
  return userData;
};

export const signUpUser = async (userData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Check if email already exists
  const existingUser = users.find(
    (u) => u.email.toLowerCase() === userData.email.toLowerCase()
  );
  if (existingUser) {
    throw new Error("Email already registered");
  }

  const newUser = {
    id: users.length + 1,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
    roleId: 2,
    profile: {
      phone: null,
      avatar: null,
      address: null,
      city: null,
      state: null,
      postalCode: null,
      country: null,
    },
  };

  users.push(newUser);

  const { password, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

export const signOutUser = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};
