import { users } from "../data/usersData";
import { profiles } from "../data//profilesData";

// Get user profile by ID
export const getUserProfileById = (userId) => {
  return profiles.find((profile) => profile.userId === userId) || null;
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
    id: userId,
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

// Get user's checkout detels by ID
export const getCheckoutUserDetailsById = (userId) => {
  const basicInfo = getUserBasicInfo(userId);
  if (!basicInfo) return null;
  const profile = getUserProfileById(userId);
  if (!profile) return null;
  return {
    id: userId,
    firstName: basicInfo.firstName,
    lastName: basicInfo.lastName,
    email: basicInfo?.email,
    phone: profile?.phone || null,
    address: profile?.address || null,
    city: profile?.city || null,
    postalCode: profile?.postal_code || null,
  };
};
