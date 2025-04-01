export const orderHistory = [
  {
    orderId: "ORD123456",
    date: "2025-03-20",
    items: [
      {
        productId: 1,
        price: 99.99,
        quantity: 1,
        imageUrl: "https://via.placeholder.com/100",
      },
      {
        productId: 2,
        price: 199.99,
        quantity: 1,
        imageUrl: "https://via.placeholder.com/100",
      },
    ],
    totalAmount: 299.98,
    paymentMethod: "Credit Card",
    status: "Delivered",
    shipping: {
      address: "123 Main St, New York, NY 10001",
      trackingNumber: "TRACK12345",
      carrier: "FedEx",
      estimatedDelivery: "2025-03-22",
    },
  },
  {
    orderId: "ORD123456",
    date: "2025-03-18",
    items: [
      {
        productId: 3,
        price: 49.99,
        quantity: 2,
        imageUrl: "https://via.placeholder.com/100",
      },
    ],
    totalAmount: 99.98,
    paymentMethod: "PayPal",
    status: "Shipped",
    shipping: {
      address: "456 Elm St, Los Angeles, CA 90001",
      trackingNumber: "TRACK67890",
      carrier: "UPS",
      estimatedDelivery: "2025-03-25",
    },
  },
  {
    orderId: "ORD123456",
    date: "2025-03-16",
    items: [
      {
        productId: 4,
        price: 29.99,
        quantity: 1,
        imageUrl: "https://via.placeholder.com/100",
      },
      {
        productId: 5,
        price: 59.99,
        quantity: 1,
        imageUrl: "https://via.placeholder.com/100",
      },
    ],
    totalAmount: 89.98,
    paymentMethod: "Debit Card",
    status: "Processing",
    shipping: {
      address: "789 Maple Ave, Chicago, IL 60601",
      trackingNumber: null,
      carrier: null,
      estimatedDelivery: null,
    },
  },
  {
    orderId: "ORD123456",
    date: "2025-03-14",
    items: [
      {
        productId: 6,
        price: 119.99,
        quantity: 1,
        imageUrl: "https://via.placeholder.com/100",
      },
    ],
    totalAmount: 119.99,
    paymentMethod: "Apple Pay",
    status: "Pending",
    shipping: {
      address: "321 Oak St, Houston, TX 77001",
      trackingNumber: null,
      carrier: null,
      estimatedDelivery: null,
    },
  },
  {
    orderId: "ORD123456",
    date: "2025-03-10",
    items: [
      {
        productId: 7,
        price: 39.99,
        quantity: 1,
        imageUrl: "https://via.placeholder.com/100",
      },
    ],
    totalAmount: 39.99,
    paymentMethod: "Google Pay",
    status: "Cancelled",
    shipping: {
      address: "555 Pine St, San Francisco, CA 94101",
      trackingNumber: null,
      carrier: null,
      estimatedDelivery: null,
    },
  },
];
