import React, { useState, useEffect } from "react";
import { getCheckoutUserDetailsById } from "../../auth/services/userService";

import ShippingInformation from "./ShippingInformation";
import PaymentInformation from "./PaymentInformation";
import PaymentProcessing from "./PaymentProcessing";

function CheckoutForm({ step, cartTotal, userId }) {
  const [user] = useState(getCheckoutUserDetailsById(1));
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  console.log("User Details:", userDetails);
  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const data = await getCheckoutUserDetailsById(userId);
        console.log("User Details:", data);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  // Group payment-related props
  const paymentProps = {
    paymentMethod,
    setPaymentMethod,
  };

  if (isProcessing) {
    return (
      <PaymentProcessing
        paymentMethod={paymentMethod}
        onSuccess={() => setIsProcessing(false)}
      />
    );
  }

  return (
    <div>
      {step === 1 && <ShippingInformation user={userDetails} />}
      {step === 2 && (
        <>
          <PaymentInformation {...paymentProps} />
          <button
            onClick={() => setIsProcessing(true)}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300 mt-6"
          >
            {paymentMethod === "card" ? `Pay $${cartTotal}` : "Confirm Order"}
          </button>
        </>
      )}
    </div>
  );
}

export default CheckoutForm;
