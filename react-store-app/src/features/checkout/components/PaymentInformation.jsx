import React from "react";

function PaymentInformation({ paymentMethod, setPaymentMethod }) {
  console.log("Payment Information Props:", paymentMethod);
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Payment Information</h3>
      {/* Payment Method Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select Payment Method
        </label>
        <div className="flex gap-4">
          <label className="flex items-center p-2 border rounded-lg cursor-pointer hover:border-black transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <span>Card Payment</span>
          </label>
          <label className="flex items-center p-2 border rounded-lg cursor-pointer hover:border-black transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <span>Cash on Delivery</span>
          </label>
        </div>
      </div>

      {/* Card Payment Form */}
      {paymentMethod === "card" && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="123"
              />
            </div>
          </div>
        </>
      )}

      {/* Cash on Delivery Message */}
      {paymentMethod === "cash" && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">
            You will pay when your order is delivered. Additional fee of $2.00
            may apply.
          </p>
        </div>
      )}
    </div>
  );
}

export default PaymentInformation;
