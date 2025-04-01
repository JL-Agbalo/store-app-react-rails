/**
 * @fileoverview Registration page component
 * Handles new user account creation
 * Includes form for user details and validation
 */
import React from "react";
import SignUpForm from "../../features/auth/components/SignUpForm";

function SignUp() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left - Text Content */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-black text-white p-10 animate-fadeIn">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Welcome to Our Store
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Experience the best shopping experience with us. Discover a wide
            range of products and enjoy seamless shopping.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Right - Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 lg:p-20 animate-slideIn">
        <div className="w-full max-w-[450px]">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Create Account
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Join us for the best shopping experience
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
