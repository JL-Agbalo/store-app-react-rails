import React, { useState } from "react";
import { Eye, EyeOff } from "../../../../shared/components/Icons/ProfileIcons";
import Button from "../../../../shared/components/Button";

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="my-4">
      <h3 className="text-base font-medium text-gray-800 mb-2">
        Change Password
      </h3>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Current Password</label>
          <div className="relative">
            <input
              type={showPassword.currentPassword ? "text" : "password"}
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="********"
            />
            {showPassword.currentPassword ? (
              <EyeOff
                className="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => togglePasswordVisibility("currentPassword")}
              />
            ) : (
              <Eye
                className="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => togglePasswordVisibility("currentPassword")}
              />
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Enter your current password to verify it's you.
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">New Password</label>
          <div className="relative">
            <input
              type={showPassword.newPassword ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="********"
            />
            {showPassword.newPassword ? (
              <EyeOff
                className="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => togglePasswordVisibility("newPassword")}
              />
            ) : (
              <Eye
                className="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => togglePasswordVisibility("newPassword")}
              />
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Password must be at least 8 characters long with 1 uppercase letter,
            1 number, and 1 special character.
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="********"
            />
            {showPassword.confirmPassword ? (
              <EyeOff
                className="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              />
            ) : (
              <Eye
                className="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              />
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Re-enter your new password to confirm.
          </p>
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <Button>Change Password</Button>
      </div>
    </div>
  );
}

export default ChangePassword;
