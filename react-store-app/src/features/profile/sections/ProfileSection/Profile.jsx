import React, { useState, useEffect } from "react";
import { getUserDetailsById } from "../../../auth/services/userService";
import Avatar from "../../../../shared/components/Avatar";
import UserInformation from "./UserInformation";

function Profile({ userId = 1 }) {
  const [userData, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const data = await getUserDetailsById(1);
        console.log("User Details:", data);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("User Data:", userData);

  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div>
        <div className="mb-4 flex items-center gap-4">
          <Avatar
            src={userData?.avatar}
            alt={userData?.firstName}
            className="w-20 h-20 border-2 border-gray-200"
          />
          <div className="flex flex-col">
            <div className="flex gap-2 mb-2">
              <button className="px-2 py-1 text-sm border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
                Change Avatar
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Square JPG, PNG, or GIF (1000px min)
            </p>
          </div>
        </div>
        <UserInformation user={userData} />
      </div>
    </section>
  );
}

export default Profile;
