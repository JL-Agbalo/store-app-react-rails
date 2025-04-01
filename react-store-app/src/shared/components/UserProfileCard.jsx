import React from "react";
import Avatar from "./Avatar";

function UserProfileCard({
  firstName,
  lastName,
  email,
  image,
  className = "w-10 h-10",
}) {
  return (
    <div className="flex items-center space-x-4">
      <Avatar src={image} alt={firstName} className={className} />
      <div>
        <h3 className="text-lg font-semibold">{`${firstName} ${lastName}`}</h3>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
    </div>
  );
}

export default UserProfileCard;
