import React, { useEffect, useState } from "react";
import UserProfileCard from "../../../shared/components/UserProfileCard";
import { Link } from "react-router-dom";
import { getUserDetailsById } from "../../auth/services/userService";

function ShippingInformation({ userId }) {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const data = await getUserDetailsById(userId);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div className="space-y-6">
      <UserProfileCard
        first_name={userDetails?.first_name}
        last_name={userDetails?.last_name}
        email={userDetails?.email}
        image={userDetails?.avatar}
        className="w-16 h-16"
      />
      <h3 className="text-xl font-semibold">Shipping Information</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Name Fields */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">
            {userDetails?.first_name}
          </p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">
            {userDetails?.last_name}
          </p>
        </div>
      </div>
      {/* Contact and Address Fields */}
      <div className="grid grid-cols-2 gap-4">
        {/* Name Fields */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">
            {userDetails?.email}
          </p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">
            {userDetails?.phone}
          </p>
        </div>
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </span>
        <p className="w-full p-2 bg-gray-50 rounded-lg">
          {userDetails?.address}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            City
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">
            {userDetails?.city}
          </p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
          </span>
          <p className="w-full p-2 bg-gray-50 rounded-lg">
            {userDetails?.postalCode}
          </p>
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
