import axios from "axios";

const API_URL = "https://your-api-url.com/api/users";

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
};

export const getUserProfile = async (userId: string) => {
    const response = await axios.get(`${API_URL}/profile/${userId}`);
    return response.data;
};

export const updateProfile = async (userId: string, data: object) => {
    const response = await axios.put(`${API_URL}/profile/${userId}`, data);
    return response.data;
};
