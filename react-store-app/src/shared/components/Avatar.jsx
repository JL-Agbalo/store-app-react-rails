import React from "react";
import { UserCircle } from "./Icons/CommonIcons";

function Avatar({ src, alt, hasNotification, className = "" }) {
  return (
    <div className="relative">
      {src ? (
        <img
          src={src}
          alt={alt || "User avatar"}
          className={`rounded-full object-cover ${className}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.replaceWith(UserCircle());
          }}
        />
      ) : (
        <UserCircle
          className={`text-black-400 ${className}`}
          aria-label={alt || "Default user avatar"}
        />
      )}
      {hasNotification && (
        <span className="absolute top-0 right-0 block w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      )}
    </div>
  );
}

export default Avatar;
