import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignIn } from "../hooks/useSignIn";
import SocialMediaAuth from "./SocialMediaAuth";
import {
  Email,
  Password,
  Eye,
  EyeOff,
} from "../../../shared/components/Icons/AuthIcons";

const SignInForm = () => {
  const { register, handleSubmit, errors, isLoading } = useSignIn();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Form-level error display */}
      {errors.root && (
        <div className="p-3 mb-4 text-sm text-red-500 rounded-lg bg-red-50 border border-red-100">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
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
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              {errors.email.message}
            </p>
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
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              {errors.password.message}
            </p>
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
