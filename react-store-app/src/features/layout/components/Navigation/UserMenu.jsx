import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../../../shared/components/Avatar";
import { userNavLinks } from "../../config/navigation";
import { Logout } from "../../../../shared/components/icons/NavigationIcons";
import { useAuth } from "../../../auth/hooks/useAuth";

function UserMenu({ currentUser, setIsCartOpen }) {
  const { logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate("/signin");
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-8 h-8 hover:opacity-80 focus:outline-none"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Avatar
          src={currentUser?.profile?.avatar}
          alt="User Avatar"
          hasNotification={true}
          className="w-8 h-8 rounded-full object-cover"
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg w-64 overflow-hidden">
          <div className="p-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-medium">{`${currentUser.firstName} ${currentUser.lastName}`}</span>
                <span className="text-xs text-gray-500">
                  {currentUser.email}
                </span>
              </div>
            </div>
          </div>

          {userNavLinks.map((link) =>
            link.label === "My Orders" || link.label === "Notifications" ? (
              <button
                key={link.to}
                onClick={() => {
                  setIsCartOpen(true);
                  setIsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 hover:bg-gray-200 flex items-center justify-between text-left"
              >
                <div className="flex items-center">
                  <link.icon className="w-5 h-5 mr-2" />
                  {link.label}
                </div>
                {link.hasNotification && (
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                )}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 hover:bg-gray-200 flex items-center"
              >
                <link.icon className="w-5 h-5 mr-2" />
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center rounded-b-lg "
          >
            <Logout className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
