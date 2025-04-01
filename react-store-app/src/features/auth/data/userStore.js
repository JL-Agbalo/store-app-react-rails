import { users } from "./mockData";

class UserStore {
  constructor() {
    this.users = [...users];
  }

  addUser(userData) {
    const newUser = {
      id: this.users.length + 1,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password_hash: userData.password, // In a real app, this should be hashed
      created_at: new Date().toISOString(),
    };

    this.users.push(newUser);
    console.log("👤 New user added:", newUser);
    console.log("📊 Current users in store:", this.users);
    return newUser;
  }

  getUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  findUser(email, password) {
    console.log("Attempting to find user with:", { email, password });
    const user = this.users.find((user) => {
      const emailMatch = user.email.toLowerCase() === email.toLowerCase();
      const passwordMatch = user.password_hash === password;
      console.log("Checking user:", user.email, {
        emailMatch,
        passwordMatch,
        storedPassword: user.password_hash,
        providedPassword: password,
      });
      return emailMatch && passwordMatch;
    });
    console.log("Found user:", user);
    return user;
  }
}

export const userStore = new UserStore();
