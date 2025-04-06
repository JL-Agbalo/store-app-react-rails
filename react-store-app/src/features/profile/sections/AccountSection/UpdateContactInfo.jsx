import React, { useState } from "react";
import { Verified } from "../../../../shared/components/Icons/ProfileIcons";
// import { Button } from "../../../common";

function UpdateContactInfo({ user }) {
  const [formData, setFormData] = useState({
    email: user.email,
    phone: user.phone,
  });

  const [verified, setVerified] = useState({
    email: true,
    phone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="my-4">
      <h3 className="text-base font-medium text-gray-800 mb-4">
        Contact Information
      </h3>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 pr-9 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                />
                <Verified
                  className={`w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 
                  ${verified.email ? "text-green-500" : "text-red-500"}`}
                />
              </div>
              {/* TODO Apply Reusbale Button here */}
              <button
                className={`px-4 py-2 rounded-lg text-sm ${
                  verified.email
                    ? "bg-green-100 text-green-800"
                    : "bg-black text-white hover:bg-gray-900"
                } transition-colors`}
              >
                {verified.email ? "Verified" : "Verify"}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 pr-9 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                />
                <Verified
                  className={`w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 
                  ${verified.phone ? "text-green-500" : "text-red-500"}`}
                />
              </div>
              {/* TODO Apply Reusbale Button here */}
              <button
                className={`px-4 py-2 rounded-lg text-sm ${
                  verified.phone
                    ? "bg-green-100 text-green-800"
                    : "bg-black text-white hover:bg-gray-900"
                } transition-colors`}
              >
                {verified.phone ? "Verified" : "Verify"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateContactInfo;
