import { users } from "../data/users/users";
import { profiles } from "../data/users/profiles";

export const getUserById = (userId) => {
  return users.find((user) => user.id === userId) || null;
};

export const getUserAvatar = (userId) => {
  const profile = profiles.find((p) => p.user_id === userId);
  return profile ? profile.avatar_url : null;
};

export const getUserProfile = (userId) => {
  return profiles.find((profile) => profile.user_id === userId) || null;
};

export const getUserDetails = (userId) => {
  const user = getUserById(userId);
  if (!user) return null;

  const profile = getUserProfile(userId);

  return {
    ...user,
    profile: profile
      ? {
          phone: profile.phone,
          avatar_url: profile.avatar_url,
          bio: profile.bio,
          location: {
            street: profile.street,
            city: profile.city,
            state: profile.state,
            postalCode: profile.postal_code,
            country: profile.country,
          },
          dateOfBirth: profile.date_of_birth,
        }
      : null,
  };
};
