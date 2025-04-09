import React, { useState, useEffect } from "react";

import ShippingInformation from "./ShippingInformation";
import PaymentInformation from "./PaymentInformation";

function CheckoutForm({ step, total, userId }) {
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Group payment-related props
  const paymentProps = {
    paymentMethod,
    setPaymentMethod,
  };

  return (
    <div>
      {step === 1 && <ShippingInformation userId={userId} />}
      {step === 2 && (
        <>
          <PaymentInformation {...paymentProps} />
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300 mt-6">
            {paymentMethod === "card" ? `Pay $${total}` : "Confirm Order"}
          </button>
        </>
      )}
    </div>
  );
}

export default CheckoutForm;
