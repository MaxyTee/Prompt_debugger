import axios from "axios";
import { create } from "zustand";

// const API_URL = "https://artistic-beauty-production.up.railway.app/api";
const API_URL = `${import.meta.env.VITE_API_URL}`;

export const userChatStore = create((set, get) => ({
  chats: [],
  chat: null,
  isLoading: false,
  error: null,

  getChats: async (userId) => {
    set({ isLoading: false, error: null });
    try {
      const response = await axios.get(`${API_URL}/chatList/chats/${userId}`);
      set({ chats: response.data.chats, isLoading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error getting chats",
        isLoading: false,
      });
      throw error;
    }
  },

  postChat: async (payload) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/chatList/chat`, payload);
      if (!response.data.success) {
        set({ isLoading: false, error: response.data.message });
      }

      set({ chat: response.data.chat, isLoading: false, error: null });
      const { getChats } = get();
      await getChats(payload.userId);
      return {
        success: true,
        chatId: response.data.chat._id,
      };
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error posting chat",
        isLoading: false,
      });
      throw error;
    }
  },

  getChatbyId: async (chatId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/chatList/chat/${chatId}`);

      if (!response.data.success) {
        set({ isLoading: false, error: response.data.message });
      }

      set({ chat: response.data.chat, isLoading: false, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error fetching data",
        isLoading: false,
      });
      throw error;
    }
  },
}));
