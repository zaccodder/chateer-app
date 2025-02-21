import axios from "axios";

const API_URL = "https://your-api-url.com/api/chat";

export const fetchMessages = async (chatId: string) => {
    const response = await axios.get(`${API_URL}/messages/${chatId}`);
    return response.data;
};

export const sendMessage = async (chatId: string, message: string) => {
    const response = await axios.post(`${API_URL}/messages`, { chatId, message });
    return response.data;
};
