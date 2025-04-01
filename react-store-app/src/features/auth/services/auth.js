import { userStore } from "../data/userStore";

export const signInUser = async (email, password) => {
  console.log("🔐 Mock API: Attempting to sign in user:", email);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = userStore.findUser(email, password);
      if (user) {
        console.log("🔐 Mock API: Sign in successful", user);
        resolve(user);
      } else {
        console.log("🔐 Mock API: Sign in failed - Invalid credentials");
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

export const signUpUser = async (userData) => {
  console.log("🔐 Mock API: Attempting to register user:", userData);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userStore.getUserByEmail(userData.email)) {
        console.log("❌ Mock API: Registration failed - Email already exists");
        reject(new Error("Email already exists"));
      } else {
        const newUser = userStore.addUser(userData);
        console.log("✅ Mock API: Registration successful", newUser);
        resolve(newUser);
      }
    }, 1000);
  });
};

export const authService = {
  signInUser,
  signUpUser,
};
