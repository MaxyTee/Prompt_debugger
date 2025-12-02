import axios from "axios";
import { create } from "zustand";

export const useAIStore = create((set) => ({
  aiData: null,
  isLoading: false,
  error: null,

  debugPrompt: async (input) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        "artistic-beauty-production.up.railway.app/api/prompt",
        {
          prompt: input,
        }
      );

      if (!response.data.success) {
        set({ isLoading: false, error: response.data.message });
      }

      set({ aiData: response.data.parsed });
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data || "AI request failed",
      });

      return null;
    }
  },
}));
