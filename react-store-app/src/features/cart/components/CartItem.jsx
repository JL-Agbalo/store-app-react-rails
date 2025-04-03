import React from "react";
import { Plus, Minus, Close } from "../../../shared/components/Icons/CartIcons";

function CartItem({ item }) {
  console.log("CartItem", item);
  return (
    <div className="flex items-start gap-2 py-2.5 px-1.5 hover:bg-gray-50/50 rounded-lg transition-all group">
      <div className="relative flex-shrink-0">
        <img
          src={item.primaryImage}
          alt={item.name}
          className="w-18 h-18 object-cover rounded-lg bg-gray-50"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-1">
          <div>
            <h3 className="font-medium text-gray-900 text-sm truncate lg:text-clip lg:whitespace-normal max-w-[120px] lg:max-w-none">
              {item.name}
            </h3>
            <p className="text-gray-400 text-xs mt-0.5">Unit: ${item.price}</p>
          </div>
          <p className="font-semibold text-gray-900 text-sm">
            ${item.price * item.quantity}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center bg-gray-100 rounded-md">
            <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-white hover:text-black hover:shadow-sm transition-all rounded">
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center text-sm">{item.quantity}</span>
            <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-white hover:text-black hover:shadow-sm transition-all rounded">
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
            <Close className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
