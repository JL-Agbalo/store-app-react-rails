import React, { useEffect, useState } from "react";
import { getCheckoutByUserId } from "../../features/checkout/services/checkoutServices";
import CheckoutForm from "../../features/checkout/components/CheckoutForm";
import CheckoutSummary from "../../features/checkout/components/CheckoutSummary";
function Checkout({ userId = 1 }) {
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [checkout, setCheckout] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await getCheckoutByUserId(1);
        setCheckout(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [userId]);

  console.log("checkout", checkout);
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps Indicator */}
        <div className="flex items-center justify-center mb-8">
          {["Shipping", "Payment"].map((label, i) => (
            <React.Fragment key={label}>
              <div
                className={`flex items-center ${
                  i + 1 === step ? "text-black" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-medium ${
                    i + 1 === step
                      ? "border-black text-black"
                      : "border-gray-300"
                  }`}
                >
                  {i + 1}
                </div>
                <span className="ml-2 text-sm font-medium">{label}</span>
              </div>
              {i < 1 && <div className="w-24 h-px bg-gray-200 mx-2" />}
            </React.Fragment>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/5">
            <div className="bg-white rounded-lg shadow-md p-6">
              <CheckoutForm
                step={step}
                total={checkout?.total}
                userId={userId}
              />
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-md p-8">
                <CheckoutSummary checkout={checkout} />
                <div className="mt-8 space-y-4">
                  {step === 1 ? (
                    <button
                      onClick={() => setStep(2)}
                      className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300"
                      disabled={checkout?.cartItems?.length === 0}
                    >
                      Continue to Payment
                    </button>
                  ) : (
                    <button
                      onClick={() => setStep(1)}
                      className="w-full text-center text-black hover:text-gray-600 hover:underline py-3 transition-colors"
                    >
                      Back to Shipping
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
