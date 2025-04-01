import React from "react";
import { Link } from "react-router-dom";
import {
  Close,
  Logout,
} from "../../../../shared/components/icons/NavigationIcons";
import { mainNavLinks, userNavLinks } from "../../config/navigation";
import UserProfileCard from "../../../../shared/components/UserProfileCard";
import { AUTH_ROUTES } from "../../constants/routes";

function MobileMenu({
  isOpen,
  onClose,
  isAuthenticated,
  setIsAuthenticated,
  setIsCartOpen,
  user,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="flex justify-between items-center p-2 shadow-md">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button onClick={onClose} className="p-2">
          <Close className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {isAuthenticated && user && (
            <UserProfileCard
              firstName={user?.firstName}
              lastName={user?.lastName}
              email={user?.email}
              image={user?.profile?.avatar_url}
            />
          )}

          {mainNavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-2 hover:text-gray-600"
              onClick={onClose}
            >
              <link.icon className="w-5 h-5 inline mr-3" />
              {link.label}
            </Link>
          ))}

          {isAuthenticated && (
            <>
              <div className="h-px bg-gray-200 my-4" />
              {userNavLinks.map((link) => (
                <MobileMenuItem
                  key={link.to}
                  link={link}
                  onClose={onClose}
                  setIsCartOpen={setIsCartOpen}
                />
              ))}
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  onClose();
                }}
                className="block w-full text-left py-2"
              >
                <Logout className="w-5 h-5 inline mr-3" />
                Logout
              </button>
            </>
          )}

          {!isAuthenticated && (
            <>
              <div className="h-px bg-gray-200 my-4" />
              <Link
                to={AUTH_ROUTES.SIGNIN}
                className="block py-2 hover:text-gray-600"
                onClick={onClose}
              >
                Sign In
              </Link>
              <Link
                to={AUTH_ROUTES.SIGNUP}
                className="block py-2 hover:text-gray-600"
                onClick={onClose}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileMenuItem({ link, onClose, setIsCartOpen }) {
  if (link.label === "My Orders" || link.label === "Notifications") {
    return (
      <button
        onClick={() => {
          setIsCartOpen(true);
          onClose();
        }}
        className="w-full text-left py-2 hover:text-gray-600 flex items-center justify-between"
      >
        <div className="flex items-center">
          <link.icon className="w-5 h-5 inline mr-3" />
          {link.label}
        </div>
        {link.hasNotification && (
          <div className="w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>
    );
  }

  return (
    <Link
      to={link.to}
      className="block py-2 hover:text-gray-600"
      onClick={onClose}
    >
      <link.icon className="w-5 h-5 inline mr-3" />
      {link.label}
    </Link>
  );
}

export default MobileMenu;
