import { users } from "../data/usersData";
import { getUserProfileById } from "./userService";

export const signInUser = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    throw new Error("Invalid email or password");
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

  localStorage.setItem("user", JSON.stringify(userData));
  return userData;
};

export const signOutUser = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};
