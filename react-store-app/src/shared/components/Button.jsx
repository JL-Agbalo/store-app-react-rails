import React from "react";

function Button({ children, onClick, className = "", ...props }) {
  // Refactor the button with icon
  return (
    <button
      className={`px-3 py-2 text-sm bg-black text-white hover:bg-gray-800 rounded-lg transition-colors cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
