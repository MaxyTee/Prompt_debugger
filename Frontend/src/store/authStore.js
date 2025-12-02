import { create } from "zustand";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loadingSignup: false,
  signupError: null,
  loadingLogin: false,
  loginError: null,
  isCheckingAuth: true,
  loadingLogout: false,
  logoutError: null,
  isLoading: false,
  error: null,
  signup: async (name, password, email) => {
    set({ loadingSignup: true, signupError: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        name,
        password,
        email,
      });

      if (!response.data.success) {
        set({ loadingSignup: false, signupError: response.data.message });
      }

      set({ user: response.data, isAuthenticated: true, loadingSignup: false });
    } catch (error) {
      set({
        signupError: error.response.data.message || "Error signing up",
        loadingSignup: false,
      });
      throw error;
    }
  },

  login: async (email, password) => {
    set({ loadingLogin: true, loginError: null });

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      if (!response.data.success) {
        set({ loadingLogin: false, loginError: response.data.message });
      }

      set({
        user: response.data.user,
        isAuthenticated: true,
        loadingLogin: false,
        loginError: null,
      });
    } catch (error) {
      set({
        loginError: error.response.data.message || "Error logining in",
        loadingLogin: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ loadingLogout: true, logoutError: null });

    try {
      const response = await axios.post(`${API_URL}/logout`);

      if (!response.data.success) {
        set({ loadingLogin: false, logoutError: response.data.message });
      }

      set({
        user: null,
        isAuthenticated: false,
        loadingLogin: false,
        logoutError: null,
      });
    } catch (error) {
      set({
        logoutError: error.response?.error?.message || "Error logging out",
        loadingLogin: false,
      });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      if (!response.data.success)
        set({
          isLoading: false,
          error: response.data.message,
        });

      console.log(response.data.user);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);

      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      console.log("Error", error);
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },

  sendResetPasswordLink: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/forget-password`, {
        email,
      });

      if (!response.data.success) {
        set({ isLoading: false, error: response.data.message });
      }

      set({ isLoading: false, error: null });
    } catch (error) {
      console.log("Error:", error);
      set({
        isLoading: false,
        error:
          error.response?.data?.message || "Error sending reset email link",
      });
    }
  },

  sendForgetPassword: async (password, token) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, {
        password,
      });

      if (!response.data.success) {
        set({ isLoading: false, error: response.data.error });
      }

      set({ isLoading: false, error: null });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error sending forget password",
        isLoading: false,
      });
    }
  },
}));
