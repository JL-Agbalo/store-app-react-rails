import { orders } from "../data/ordersData";
import { orderItems } from "../data/ordersItemData";
import { orderHistory } from "../data/orderHistoryData";
import { payments } from "../data/paymentsData";

// Function to get orders by user_id
export const getOrdersByUserId = (userId) => {
  return orders
    .filter((order) => order.user_id === userId)
    .map((order) => ({
      id: order.id,
      date: order.created_at,
      status: order.status,
      total: order.total_price,
    }));
};

// Function to filter orders by status
export const filterOrders = (orders, status) => {
  if (status === "all") return orders;
  return orders.filter(
    (order) => order.status.toLowerCase() === status.toLowerCase()
  );
};
