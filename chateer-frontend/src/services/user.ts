import axios from 'axios';
const baseUrl = '/api/v1/auth';
import type { Register, User } from '../types';
// register user
export const registerUser = async (user: Register): Promise<User> => {
  const response = await axios.post(`${baseUrl}/sign-up`, user);
  return response.data;
};

// login user
export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<User> => {
  const response = await axios.post(`${baseUrl}/log-in`, credentials);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await axios.get(`${baseUrl}/users`);
  return response.data;
};
