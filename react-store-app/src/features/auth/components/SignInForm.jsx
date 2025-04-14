import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSignIn } from "../hooks/useSignIn";
import SocialMediaAuth from "./SocialMediaAuth";
import {
  Email,
  Password,
  Eye,
  EyeOff,
  Alert,
  Check,
} from "../../../shared/components/Icons/AuthIcons";

const SignInForm = () => {
  const { register, handleSubmit, errors, isLoading, setValue } = useSignIn();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  console.log("location", location.state);

  useEffect(() => {
    if (location.state?.email) {
      setValue("email", location.state.email);
    }
  }, [location.state, setValue]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Success message from signup */}
      {location.state?.message && (
        <div className="p-3 mb-4 text-sm text-green-600 rounded-lg bg-green-50 border border-green-100">
          <div className="flex items-center">
            <Check className="w-4 h-4 mr-2 fill-current" />
            {location.state.message}
          </div>
        </div>
      )}

      {/* Form-level error display */}
      {errors.root && (
        <div className="p-3 mb-4 text-sm text-red-500 rounded-lg bg-red-50 border border-red-100">
          <div className="flex items-center">
            <Alert className="w-4 h-4 mr-2 fill-current" />
            {errors.root.message}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            Email
          </label>
          <div
            className={`flex items-center border rounded-lg p-2.5 focus-within:ring-2 focus-within:ring-black/5 transition-all duration-200 hover:border-gray-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          >
            <Email className="text-gray-400 w-4 h-4 mr-2" />
            <input
              {...register("email")}
              type="email"
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              placeholder="Enter your email"
              disabled={isLoading}
            />
          </div>
          {errors.email && (
            <div className="flex items-start space-x-2 mt-1.5">
              <Alert className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-red-500 text-[11px] leading-normal">
                {errors.email.message}
              </p>
            </div>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            Password
          </label>
          <div
            className={`flex items-center border rounded-lg p-2.5 focus-within:ring-2 focus-within:ring-black/5 transition-all duration-200 hover:border-gray-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          >
            <Password className="text-gray-400 w-4 h-4 mr-2" />
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              placeholder="Enter your password"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600"
              disabled={isLoading}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <div className="flex items-start space-x-2 mt-1.5">
              <Alert className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-red-500 text-[11px] leading-normal">
                {errors.password.message}
              </p>
            </div>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 rounded border-gray-300 text-black focus:ring-black"
              disabled={isLoading}
            />
            <label className="ml-2 text-xs text-gray-600">Remember me</label>
          </div>
          <Link
            to="/forgot-password"
            className={`text-xs font-medium text-black hover:text-gray-700 ${
              isLoading ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-2.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] font-semibold text-sm shadow-md hover:shadow-xl
            ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
            }`}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>

        {/* Social Media Authentication */}
        <SocialMediaAuth title="Or continue with" disabled={isLoading} />

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className={`text-black font-semibold hover:underline transition-all ${
              isLoading ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
