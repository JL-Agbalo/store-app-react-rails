export const notificationSettings = [
  {
    id: "orders",
    category: "Order Updates",
    settings: [
      {
        id: "order_confirmation",
        label: "Order Confirmation",
        description: "Get notified when your order is confirmed",
      },
      {
        id: "shipping_updates",
        label: "Shipping & Delivery",
        description: "Track your order status and delivery updates",
      },
      {
        id: "order_status",
        label: "Order Status Changes",
        description: "Receive updates when your order status changes",
      },
    ],
  },
  {
    id: "account",
    category: "Account & Security",
    settings: [
      {
        id: "security_alerts",
        label: "Security Alerts",
        description: "Important alerts about your account security",
      },
      {
        id: "login_attempts",
        label: "Login Attempts",
        description: "Get notified of new login attempts",
      },
      {
        id: "password_changes",
        label: "Password Changes",
        description: "Notifications about password changes",
      },
    ],
  },
  {
    id: "promotions",
    category: "Promotional",
    settings: [
      {
        id: "special_offers",
        label: "Special Offers",
        description: "Receive special offers and discounts",
      },
      {
        id: "flash_sales",
        label: "Flash Sales",
        description: "Be the first to know about flash sales",
      },
    ],
  },
  {
    id: "products",
    category: "Product Updates",
    settings: [
      {
        id: "price_drops",
        label: "Price Drops",
        description: "Get notified when prices drop on your saved items",
      },
      {
        id: "back_in_stock",
        label: "Back in Stock",
        description: "Notifications when out-of-stock items are available",
      },
    ],
  },
];
