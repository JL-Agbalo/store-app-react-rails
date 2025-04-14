import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialMediaAuth from "./SocialMediaAuth";
import { useSignUp } from "../hooks/useSignUp";
import {
  Eye,
  EyeOff,
  Email,
  Password,
  Alert,
} from "../../../shared/components/Icons/AuthIcons";

function SignUpForm() {
  const { register, handleSubmit, errors, isLoading } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="space-y-3">
        {/* First Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            First Name
          </label>
          <div
            className={`flex items-center border rounded-lg p-2.5 focus-within:ring-2 focus-within:ring-black/5 transition-all duration-200 hover:border-gray-400 ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          >
            <input
              type="text"
              {...register("firstName")}
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              placeholder="Enter your first name"
              disabled={isLoading}
            />
          </div>
          {errors.firstName && (
            <div className="flex items-start space-x-2 mt-1.5">
              <Alert className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-red-500 text-[11px] leading-normal">
                {errors.firstName.message}
              </p>
            </div>
          )}
        </div>

        {/* Last Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            Last Name
          </label>
          <div
            className={`flex items-center border rounded-lg p-2.5 focus-within:ring-2 focus-within:ring-black/5 transition-all duration-200 hover:border-gray-400 ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
          >
            <input
              type="text"
              {...register("lastName")}
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              placeholder="Enter your last name"
              disabled={isLoading}
            />
          </div>
          {errors.lastName && (
            <div className="flex items-start space-x-2 mt-1.5">
              <Alert className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-red-500 text-[11px] leading-normal">
                {errors.lastName.message}
              </p>
            </div>
          )}
        </div>

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
              type="email"
              {...register("email")}
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
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              placeholder="Create a password"
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

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            Confirm Password
          </label>
          <div
            className={`flex items-center border rounded-lg p-2.5 focus-within:ring-2 focus-within:ring-black/5 transition-all duration-200 hover:border-gray-400 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          >
            <Password className="text-gray-400 w-4 h-4 mr-2" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              placeholder="Confirm your password"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-gray-400 hover:text-gray-600"
              disabled={isLoading}
            >
              {showConfirmPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <div className="flex items-start space-x-2 mt-1.5">
              <Alert className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-red-500 text-[11px] leading-normal">
                {errors.confirmPassword.message}
              </p>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-2.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] font-semibold text-sm shadow-md hover:shadow-xl
            ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
            }`}
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>

        <SocialMediaAuth title="Or continue with" disabled={isLoading} />

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className={`text-black font-semibold hover:underline transition-all ${
              isLoading ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpForm;
