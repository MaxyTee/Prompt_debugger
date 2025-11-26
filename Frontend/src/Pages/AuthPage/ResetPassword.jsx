import React, { useState } from "react";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { sendResetPasswordLink, isLoading, error } = useAuthStore();
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = async (e) => {
    const { value } = e.target;
    setEmail(value);

    // Clear error when user starts typing
    if (errors.email) {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
    };

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await sendResetPasswordLink(email);
        setIsSubmitted(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex px-6 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white space-y-6 py-8 px-4 shadow-lg border border-gray-100 sm:rounded-lg sm:px-10 text-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex justify-center">
                <div className="bg-amber-500 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Check Your Email
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                We've sent a password reset link to your email address
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-md border border-amber-100 mb-6">
              <p className="text-sm text-amber-700">
                If you don't see the email, check your spam folder or try again.
              </p>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
            >
              Send Another Link
            </button>

            <div className="mt-4 text-center">
              <Link
                to="/login"
                className="inline-flex items-center text-sm text-amber-600 hover:text-amber-500 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex px-6 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white space-y-6 py-8 px-4 shadow-lg border border-gray-100 sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center">
              <div className="bg-amber-500 p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset Password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your email address and we'll send you a reset link
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  } rounded-md placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm pr-10`}
                  placeholder="Enter your email address"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            {error && <p className="text-red-600">{error}</p>}

            {/* Instructions */}
            <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
              <h3 className="text-sm font-medium text-amber-800 mb-2">
                What to expect:
              </h3>
              <ul className="text-xs text-amber-700 space-y-1">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2 mt-1 flex-shrink-0"></div>
                  A password reset link will be sent to your email
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2 mt-1 flex-shrink-0"></div>
                  The link will expire in 1 hour for security
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2 mt-1 flex-shrink-0"></div>
                  Check your spam folder if you don't see the email
                </li>
              </ul>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
              >
                {isLoading ? "loading..." : "Send Reset Link"}
              </button>
            </div>

            <div className="text-center">
              <Link
                to="/login"
                className="inline-flex items-center text-sm text-amber-600 hover:text-amber-500 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
