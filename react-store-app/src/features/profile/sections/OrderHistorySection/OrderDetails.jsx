import React, { useEffect, useState } from "react";
import Modal from "../../../../shared/components/Modal";
import { getOrderDetailsByOrderId } from "../../service/orderHistoryService";

function OrderDetails({ isOpen, onClose, orderId }) {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (isOpen && orderId) {
      const details = getOrderDetailsByOrderId(orderId);
      setOrderDetails(details);
    }
  }, [isOpen, orderId]);

  if (!orderDetails) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Order Details">
      <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
    </Modal>
  );
}

export default OrderDetails;
