import { users } from "../data/users/users";
import { profiles } from "../data/users/profiles";

// Get user profile by ID
export const getUserProfileById = (userId) => {
  return profiles.find((profile) => profile.user_id === userId) || null;
};

// Get user avatar by ID
export const getUserAvatarById = (userId) => {
  const profile = getUserProfileById(userId);
  return profile ? profile.avatar_url : null;
};

// Get user's first name, last name, and email by ID
export const getUserBasicInfo = (userId) => {
  const user = users.find((user) => user.id === userId);
  if (!user) return null;

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
};

// Get user's basic info along with avatar
export const getUserInfoWithAvatar = (userId) => {
  const basicInfo = getUserBasicInfo(userId);
  if (!basicInfo) return null;

  const avatar_url = getUserAvatarById(userId);
  return {
    ...basicInfo,
    avatar_url,
  };
};
