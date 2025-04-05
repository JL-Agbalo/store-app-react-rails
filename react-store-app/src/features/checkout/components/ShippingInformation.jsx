import React from "react";
import UserProfileCard from "../../../shared/components/UserProfileCard";
import { Link } from "react-router-dom";

function ShippingInformation({ user }) {
  console.log("ShippingInformation", user);
  return (
    <div className="space-y-6">
      <UserProfileCard
        firstName={user?.firstName}
        lastName={user?.lastName}
        email={user?.email}
        image={user?.avatar}
        className="w-16 h-16"
      />
      <h3 className="text-xl font-semibold">Shipping Information</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Name Fields */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">{user?.firstName}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">{user?.lastName}</p>
        </div>
      </div>
      {/* Contact and Address Fields */}
      <div className="grid grid-cols-2 gap-4">
        {/* Name Fields */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">{user?.email}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">{user?.phone}</p>
        </div>
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </span>
        <p className="w-full p-2 bg-gray-50 rounded-lg">{user?.address}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            City
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">{user?.city}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">{user?.postalCode}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link
          to="/profile"
          className="px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}

export default ShippingInformation;
