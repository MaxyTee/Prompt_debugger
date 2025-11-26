// components/VerifyOtp.jsx
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Shield, Clock, Mail } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const VerifyOtp = () => {
  const [resendLoading, setResendLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const { verifyEmail, isLoading, error } = useAuthStore();

  const otpRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Get email from location state or use a default
  const email = location.state?.email || "user@example.com";

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleOtpChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const numbers = pastedData.replace(/\D/g, "").slice(0, 6).split("");

    const newOtp = [...otp];
    numbers.forEach((num, index) => {
      if (index < 6) {
        newOtp[index] = num;
      }
    });

    setOtp(newOtp);

    // Focus the last filled input or the last one
    const lastFilledIndex = numbers.length - 1;
    const focusIndex = Math.min(lastFilledIndex, 5);
    otpRefs.current[focusIndex]?.focus();
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const otpCode = otp.join("");

    await verifyEmail(otpCode);
    navigate("/chats");
  };

  const handleResendOtp = async () => {
    if (!canResend) return;

    setResendLoading(true);

    // Simulate resend OTP
    setTimeout(() => {
      setResendLoading(false);
      setCountdown(30);
      setCanResend(false);
      console.log("OTP resent to:", email);
    }, 1000);
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Back Button */}
      <Link
        to="/login"
        className="absolute top-6 left-6 flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back to Login</span>
      </Link>

      {/* Main Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900">Verify OTP</h1>
              <p className="text-amber-600 text-sm font-medium">
                Enter verification code
              </p>
            </div>
          </div>

          {/* Email Display */}
          <div className="flex items-center justify-center gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <Mail className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">{email}</span>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm">
            We've sent a 6-digit verification code to your email. Enter the code
            below to continue.
          </p>
        </div>

        {/* OTP Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          {/* OTP Inputs */}
          <div className="flex justify-center gap-3">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                ref={(el) => {
                  otpRefs.current[index] = el;
                }}
                className="w-12 h-12 text-center text-xl font-semibold bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
              />
            ))}
          </div>

          {/* Resend OTP Section */}
          <div className="text-center">
            {canResend ? (
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={resendLoading}
                className="text-amber-600 hover:text-amber-700 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
              >
                {resendLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-amber-600 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Resend OTP"
                )}
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>Resend OTP in {countdown}s</span>
              </div>
            )}
          </div>
          {error && <p className="text-red-600">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isOtpComplete || isLoading}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:from-amber-400 hover:to-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </button>
        </form>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Didn't receive the code? Check your spam folder or{" "}
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={!canResend || resendLoading}
              className="text-amber-600 hover:text-amber-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
