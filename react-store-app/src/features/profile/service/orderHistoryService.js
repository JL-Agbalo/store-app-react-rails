import { orders } from "../data/ordersData";
import { orderItems } from "../data/ordersItemData";
import { payments } from "../data/paymentsData";
import { products } from "../../products/data/productsData";
import { getUserDetailsById } from "../../auth/services/userService";
import { getPrimaryImage } from "../../products/services/productService";

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

// Function to get order items by order_id
export const getOrderItemsByOrderId = (orderId) => {
  return orderItems.filter((item) => item.order_id === orderId);
};

export const getOrderDetailsByOrderId = (orderId) => {
  const order = orders.find((o) => o.id === orderId);
  if (!order) {
    return null;
  }

  const user = getUserDetailsById(order.user_id);
  const payment = payments.find((p) => p.order_id === orderId);
  const items = orderItems
    .filter((item) => item.order_id === orderId)
    .map((item) => {
      const product = products.find((p) => p.id === item.product_id);
      const primaryImage = getPrimaryImage(item.product_id); // Get only the primary image
      return {
        id: item.id,
        productId: item.product_id,
        productName: product?.name || "Unknown Product",
        productImage: primaryImage || null,
        quantity: item.quantity,
        price: item.price,
        subtotal: (item.quantity * item.price).toFixed(2),
        status: item.status,
        trackingId: item.tracking_id,
        location: item.location,
        estimatedDelivery: item.updated_at
          ? new Date(item.updated_at).toLocaleDateString()
          : "N/A",
      };
    });

  return {
    orderDetails: {
      orderId: order.id,
      orderDate: order.created_at,
      orderStatus: order.status,
      paymentMethod: payment?.payment_method || "Unknown",
      totalAmount: order.total_price,
    },
    userData: {
      name: `${user?.firstName || "Unknown"} ${user?.lastName || ""}`,
      email: user?.email || "Unknown",
      phone: user?.phone || "Unknown",
      address: `${user?.address || "Unknown"}, ${user?.city || ""}, ${
        user?.state || ""
      }, ${user?.postalCode || ""}, ${user?.country || ""}`,
    },
    products: items,
    shipping: {
      method: "Standard",
      trackingNumber: items[0]?.trackingId || "N/A",
      estimatedDelivery: items[0]?.estimatedDelivery || "N/A",
    },
  };
};
