import axios from 'axios';

const baseUrl = '/api/v1/auth';

export const signup = async (data) => {
  const response = await axios.post(`${baseUrl}/sign-up`, data);
  return response.data;
};

export const login = async (data) => {
  const response = await axios.post(`${baseUrl}/log-in`, data);
  return response.data;
};
