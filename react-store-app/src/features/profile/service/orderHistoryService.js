import { orders } from "../data/ordersData";
import { orderItems } from "../data/ordersItemData";
import { payments } from "../data/paymentsData";
import { products } from "../../products/data/productsData";

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

// Function to get order items with product details by order_id
export const getOrderItemsByOrderId = (orderId) => {
  return orderItems
    .filter((item) => item.order_id === orderId)
    .map((item) => {
      const product = products.find((p) => p.id === item.product_id);
      return {
        ...item,
        productName: product?.name || "Unknown Product",
        productDescription: product?.description || "No description available",
        productPrice: product?.price || 0,
        productStock: product?.stock || 0,
        productCategoryId: product?.category_id || null,
        status: item.status,
        trackingId: item.tracking_id,
        location: item.location,
        comment: item.comment,
      };
    });
};
