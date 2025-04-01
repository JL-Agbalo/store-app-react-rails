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
  const { register, handleSubmit, errors } = useSignIn();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="space-y-3">
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2.5 focus-within:ring-2 focus-within:ring-black/5 focus-within:border-black transition-all duration-200 hover:border-gray-400">
            <Email className="text-gray-400 w-4 h-4 mr-2" />
            <input
              {...register("email")}
              type="email"
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2.5 focus-within:ring-2 focus-within:ring-black/5 focus-within:border-black transition-all duration-200 hover:border-gray-400">
            <Password className="text-gray-400 w-4 h-4 mr-2" />
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 rounded border-gray-300 text-black focus:ring-black"
            />
            <label className="ml-2 text-xs text-gray-600">Remember me</label>
          </div>
          <a
            href="#"
            className="text-xs font-medium text-black hover:text-gray-700"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-sm shadow-md hover:shadow-xl"
        >
          Sign In
        </button>

        <SocialMediaAuth title={"Or continue with"} />

        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-black font-semibold hover:underline transition-all"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
