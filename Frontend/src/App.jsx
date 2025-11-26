import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/AuthPage/Login";
import Signup from "./Pages/AuthPage/Signup";
import VerifyOtp from "./Pages/AuthPage/VerifyOtp";
import ChangePassword from "./Pages/AuthPage/ChangePassword";
import Chats from "./Pages/Chats";
import { Children } from "react";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import ResetPassword from "./Pages/AuthPage/ResetPassword";

const RedirectedAuthenticatedUser = ({ Children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/chats" />;
  }

  return Children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // if (isCheckingAuth) return <div>Loading...</div>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            // <RedirectedAuthenticatedUser>
            <Login />
            // </RedirectedAuthenticatedUser>
          }
        />
        <Route
          path="/signup"
          element={
            // <RedirectedAuthenticatedUser>
            <Signup />
            // </RedirectedAuthenticatedUser>
          }
        />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
        <Route path="/change-password/:token" element={<ChangePassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
