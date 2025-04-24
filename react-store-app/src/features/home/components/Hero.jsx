import React from "react";
import { Link } from "react-router-dom";
import headerItemBanner from "../../../assets/images/banners/headerItemBanner.png";
import { RightArrow } from "../../../shared/components/Icons/CommonIcons";

function Hero() {
  return (
    <div className="bg-white py-25 relative overflow-hidden">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl">
        <div className="lg:w-1/2 space-y-8 relative">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wider text-gray-600">
              New Collection 2025
            </p>
            <h1 className="font-light text-6xl sm:text-8xl tracking-tight text-black leading-none">
              Premium
              <span className="block font-medium">Headsets</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            Experience superior sound quality with our carefully curated
            collection. Designed for audiophiles, gamers, and professionals who
            demand excellence.
          </p>

          <Link
            to="/products"
            className="group inline-flex items-center px-8 py-3 text-sm tracking-wide border rounded-lg border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            <span>Explore Collection</span>
            <RightArrow className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <img
            src={headerItemBanner}
            className="w-full max-w-lg mx-auto hover:scale-105 transition-transform duration-500 contrast-125"
            alt="Headset"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
