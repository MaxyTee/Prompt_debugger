import axios from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:5000/api";
export const useMessageStore = create((set, get) => ({
  message: null,
  messagesDB: [],
  isLoading: false,
  error: null,

  getMessagesByChatId: async (chatId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(
        `${API_URL}/messages/allMessages/${chatId}`
      );
      if (!response.data.success) {
        set({ isLoading: false, error: response.error.message });
      }

      set({
        messagesDB: response.data.messages,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error creating message",
        isLoading: false,
      });
      throw error;
    }
  },

  createMessage: async (payload) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/messages/message`, payload);

      if (!response.data.success) {
        return set({ isLoading: false, error: response.data.message });
      }
      set({ message: response.data.messageDB });

      const { getMessagesByChatId } = get();
      await getMessagesByChatId(payload.chatId);
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error creating message",
        isLoading: false,
      });
      throw error;
    }
  },
}));
