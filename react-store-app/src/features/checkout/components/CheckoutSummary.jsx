import React from "react";
import {
  Minus,
  Plus,
  Close,
} from "../../../shared/components/Icons/CommonIcons";

function CheckoutSummary({ checkout }) {
  if (!checkout || !checkout.items || checkout.items.length === 0) {
    return <div>No items in your cart.</div>;
  }

  const subtotal = checkout.items.reduce((sum, item) => sum + item.total, 0);
  const shipping = 0; // Assuming free shipping
  const tax = subtotal * 0.1; // Assuming 10% tax
  const discount = 0; // Assuming no discount
  const total = subtotal + shipping + tax - discount;

  return (
    <div className="rounded-xl bg-gray-100 p-6 space-y-7">
      {/* Order Items */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Order Summary</h3>
        <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2">
          {checkout.items.map((item) => (
            <div key={item.productId} className="flex items-center gap-4 group">
              <img
                src={item.primaryImage}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {item.name}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <button className="text-gray-500 hover:text-black disabled:opacity-50">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button className="text-gray-500 hover:text-black">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-sm font-medium mt-1">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <Close className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="pt-4 border-t border-gray-200 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Discount</span>
            <span className="text-red-600 font-medium">
              -${discount.toFixed(2)}
            </span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-gray-900">Total</p>
            <p className="text-xs text-gray-500 mt-1">Including VAT</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-gray-900">
              ${total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
