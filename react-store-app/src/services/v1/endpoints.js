const API_BASE_URL = "http://localhost:3001/api/v1";

export const ENDPOINTS = {
  AUTH: {
    SIGNIN: `${API_BASE_URL}/signin`,
    SIGNUP: `${API_BASE_URL}/signup`,
    SIGNOUT: `${API_BASE_URL}/signout`,
    ME: `${API_BASE_URL}/me`,
    REFRESH: `${API_BASE_URL}/refresh`,
  },
};
