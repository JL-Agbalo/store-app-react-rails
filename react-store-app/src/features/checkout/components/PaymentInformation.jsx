import React from "react";

function PaymentInformation({ paymentMethod, setPaymentMethod }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Payment Information</h3>
      {/* Payment Method Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select Payment Method
        </label>
        <div className="flex gap-4 flex-wrap">
          <label className="flex items-center p-2 cursor-pointer hover:border-black transition-colors">
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
          <label className="flex items-center p-2 cursor-pointer hover:border-black transition-colors">
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
          <label className="flex items-center p-2 cursor-pointer hover:border-black transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <span>Paypal</span>
          </label>
          <label className="flex items-center p-2 cursor-pointer hover:border-black transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              value="bank_transfer"
              checked={paymentMethod === "bank_transfer"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <span>Bank Transfer</span>
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
              className="w-full p-2 bg-gray-50"
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
                className="w-full p-2 bg-gray-50"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                className="w-full p-2 bg-gray-50"
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

      {/* Paypal Message */}
      {paymentMethod === "paypal" && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">
            You will be redirected to Paypal to complete your payment.
          </p>
        </div>
      )}

      {/* Bank Transfer Message */}
      {paymentMethod === "bank_transfer" && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">
            Please transfer the total amount to the following bank account:
          </p>
          <p className="text-gray-800 font-medium mt-2">
            Bank: Example Bank
            <br />
            Account Number: 123456789
            <br />
            Routing Number: 987654321
            <br />
            Reference: Your Order ID
          </p>
        </div>
      )}
    </div>
  );
}

export default PaymentInformation;
