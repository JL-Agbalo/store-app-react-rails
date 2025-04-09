import React, { useEffect, useState } from "react";
import Modal from "../../../shared/components/Modal";
import { useNavigate } from "react-router-dom";
import { getCartByUserId } from "../../cart/services/cartService";
import CartTotal from "./CartTotal";
import CartList from "./CartList";

function Cart({ isOpen, onClose, setIsCartOpen, userId }) {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const data = await getCartByUserId(userId);
        setCartData(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId && isOpen && !cartData) {
      fetchCart();
    }
  }, [userId, isOpen, cartData]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Shopping Cart">
      <div className="flex flex-col md:flex-row md:gap-6">
        {/* Left Column - Cart Items */}
        <div className="flex-1 min-w-0">
          <div className="overflow-y-auto max-h-[60vh] md:max-h-[55vh]">
            <CartList cartData={cartData} />
          </div>
        </div>

        {/* Right Column - Total & Actions */}
        <div className="w-full md:w-[380px] flex-shrink-0 mt-6 md:mt-5">
          <div className="sticky top-0">
            <CartTotal cartData={cartData} shipping={10} discount={20} />
            <div className="mt-4 space-y-3 px-2 md:px-0">
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition duration-300 font-medium text-sm"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-gray-500 hover:text-black py-2 transition-colors text-sm"
              >
                Continue Shopping →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
