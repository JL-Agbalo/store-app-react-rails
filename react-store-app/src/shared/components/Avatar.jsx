import React from "react";

function Avatar({ src, alt, hasNotification, className = "" }) {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover ${className}`}
      />
      {hasNotification && (
        <span className="absolute top-0 right-0 block w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      )}
    </div>
  );
}

export default Avatar;
