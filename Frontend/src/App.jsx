import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/AuthPage/Login";
import Signup from "./Pages/AuthPage/Signup";
import VerifyOtp from "./Pages/AuthPage/VerifyOtp";
import ChangePassword from "./Pages/AuthPage/ChangePassword";
import Chats from "./Pages/Chats";
import { useAuthStore } from "./store/authStore";
import { Children, useEffect } from "react";
import ResetPassword from "./Pages/AuthPage/ResetPassword";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Navigate to="/login" />;
  return children;
};

const RedirectedAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/chats" />;
  }
  return children;
};

function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            <RedirectedAuthenticatedUser>
              <Login />
            </RedirectedAuthenticatedUser>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectedAuthenticatedUser>
              <Signup />
            </RedirectedAuthenticatedUser>
          }
        />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
        <Route path="/change-password/:token" element={<ChangePassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        <Route
          path="/chats"
          element={
            <ProtectedRoute>
              <Chats />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chats/:chatId"
          element={
            <ProtectedRoute>
              <Chats />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
