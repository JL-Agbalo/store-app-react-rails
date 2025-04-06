import React from "react";
import Avatar from "../../../../shared/components/Avatar";
import UserInformation from "./UserInformation";

function Profile({ user }) {
  console.log("Profile:", user);
  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div>
        <div className="mb-4 flex items-center gap-4">
          <Avatar
            src={user?.avatar}
            alt={user?.firstName}
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
        <UserInformation user={user} />
      </div>
    </section>
  );
}

export default Profile;
