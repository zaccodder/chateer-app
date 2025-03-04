import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/v1/auth';

/// Login user
const login = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`${baseUrl}/log-in`, credentials);
  return response.data;
};

/// Register user
const signup = async (credentials: {
  email: string;
  password: string;
  username: string;
}) => {
  const response = await axios.post(`${baseUrl}/sign-up`, credentials);
  return response.data;
};

export default { login, signup };
