import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Bag } from "../../../../shared/components/icons/NavigationIcons";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import Cart from "../../../cart/components/Cart";
import { mainNavLinks } from "../../config/navigation";
import { AUTH_ROUTES } from "../../../../routes/routes";

function Navbar({ isAuthenticated = false, setIsAuthenticated, currentUser }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  console.log("CurrentUser", currentUser);
  return (
    <>
      <nav className="bg-white text-black py-3 sticky top-0 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link
            to="/"
            className="font-sans text-lg tracking-widest hover:opacity-80 transition-opacity mr-8"
          >
            <span className="text-gray-400">Pixel</span>
            <span className="text-black font-medium">Mart</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="flex items-center hover:opacity-80"
                >
                  <Bag className="w-6 h-6" />
                </button>
                <div className="flex items-center">
                  <UserMenu
                    currentUser={currentUser}
                    setIsAuthenticated={setIsAuthenticated}
                    setIsCartOpen={setIsCartOpen}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to={AUTH_ROUTES.SIGNIN}
                  className="hover:text-gray-400 transition"
                >
                  Sign In
                </Link>
                <span>|</span>
                <Link
                  to={AUTH_ROUTES.SIGNUP}
                  className="hover:text-gray-400 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        setIsCartOpen={setIsCartOpen}
        currentUser={currentUser}
      />
      <Cart
        currentUser={currentUser?.id}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        setIsCartOpen={setIsCartOpen}
      />
    </>
  );
}

export default Navbar;
