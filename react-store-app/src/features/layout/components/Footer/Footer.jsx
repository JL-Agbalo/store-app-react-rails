import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-8 px-6 text-sm bg-white ">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>© 2025 PixelMart</p>
        <div className="space-x-6">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
