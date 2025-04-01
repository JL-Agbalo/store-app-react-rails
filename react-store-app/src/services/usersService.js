import { users, profiles } from "./mockData";

export const getUserById = (userId) => {
  const id = typeof userId === "string" ? parseInt(userId, 10) : userId;
  if (!id || isNaN(id)) return null;

  const user = users.find((user) => user.id === id);
  if (!user) return null;

  const userProfile = profiles.find((profile) => profile.user_id === id);

  return {
    ...user,
    profile: userProfile || null,
  };
};
