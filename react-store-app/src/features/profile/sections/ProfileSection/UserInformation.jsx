import React, { useState } from "react";
import { Lock } from "../../../../shared/components/Icons/ProfileIcons";
import Button from "../../../../shared/components/Button";
function UserInformation({ user }) {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    phone: user.phone,
    email: user.email,
    address: user.address,
    city: user.city,
    state: user.state,
    postalCode: user.postalCode,
    country: user.country,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Information */}
        <div>
          <label className="block text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full p-2 pl-9 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
            <Lock className="w-4 h-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Phone Number</label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              disabled
              className="w-full p-2 pl-9 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
            <Lock className="w-4 h-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-700">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">address Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">State/Province</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">ZIP/Postal Code</label>
            <input
              type="text"
              name="zip"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

export default UserInformation;
