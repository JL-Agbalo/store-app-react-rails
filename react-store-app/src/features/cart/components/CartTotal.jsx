import React from "react";

function CartTotal() {
  return (
    <div className="rounded-xl bg-gray-50 p-4 md:p-6 space-y-4 md:space-y-6 mx-2 md:mx-0">
      {/* Summary */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal (3 items)</span>
          <span className="font-medium">$89.98</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Tax</span>
          <span className="font-medium">$8.99</span>
        </div>
      </div>

      {/* Promo Code */}
      <div className="relative">
        <input
          type="text"
          placeholder="Enter promo code"
          className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
        />
        <button className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 px-3 md:px-4 py-1 md:py-1.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors">
          Apply
        </button>
      </div>

      {/* Total */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">$98.97</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Including VAT</span>
          <span className="text-green-600">You save $6.99</span>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
