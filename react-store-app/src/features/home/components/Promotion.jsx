import React from "react";
import { Link } from "react-router-dom";
import { Tag, Gift, Clock } from "../../../shared/components/Icons/CommonIcons";

function Promotion() {
  return (
    <div className="container mx-auto bg-gray-100">
      <section className="py-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-1 lg:col-span-7 p-8 bg-white rounded-lg flex flex-col justify-between">
            {/* Header */}
            <h2 className="font-normal text-2xl sm:text-3xl mb-6 text-black">
              Exclusive Deals & Promotion
            </h2>

            <p className="text-base text-gray-600 mb-8">
              Unlock premium savings with our limited-time offers on bestselling
              products.
            </p>

            {/* Promotion highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Tag className="text-black" size={16} />
                  <h3 className="font-normal text-black">50% Off</h3>
                </div>
                <p className="text-sm text-gray-500">Selected items</p>
              </div>

              <div className="border border-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="text-black" size={16} />
                  <h3 className="font-normal text-black">Free Gift</h3>
                </div>
                <p className="text-sm text-gray-500">Orders over $50</p>
              </div>

              <div className="border border-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-black" size={16} />
                  <h3 className="font-normal text-black">Flash Sale</h3>
                </div>
                <p className="text-sm text-gray-500">48 hours only</p>
              </div>
            </div>

            {/* CTA section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                to="/products"
                className="flex items-center py-2 px-4 w-full sm:w-auto justify-center border rounded-lg border-black text-black font-normal hover:bg-black hover:text-white transition-colors duration-200"
              >
                Shop Now
              </Link>
              <Link
                to="/"
                className="text-black font-norma transition-colors duration-200 hover:underline underline-offset-4 "
              >
                All promotion →
              </Link>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-5 hidden lg:block">
            <img
              src="https://placehold.co/600x400"
              alt="Promotion"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Promotion;
