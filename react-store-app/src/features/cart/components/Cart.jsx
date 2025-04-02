import React, { useEffect, useState } from "react";
import Modal from "../../../shared/components/Modal";
import { getCartByUserId } from "../../../services/cartService";

function Cart({ isOpen, onClose, setIsCartOpen, userId }) {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCartByUserId(userId);
        console.log("Fetched cart data:", data);
        setCartData(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    if (userId) {
      fetchCart();
    }
  }, [userId]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Shopping Cart">
      <div>
        {cartData ? (
          <div>Cart items will go here</div>
        ) : (
          <div>Loading cart...</div>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
