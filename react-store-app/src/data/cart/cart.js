export const carts = [
  {
    id: 1,
    userId: 1, // Fish Johnson
    items: [
      {
        product_id: 2, // Smartphone
        quantity: 1,
        price: 699.99,
      },
      {
        product_id: 5, // Running Shoes
        quantity: 2,
        price: 79.99,
      },
      {
        product_id: 13, // Backpack
        quantity: 1,
        price: 45.99,
      },
      {
        product_id: 15, // Cooking Book
        quantity: 1,
        price: 24.99,
      },
      {
        product_id: 10, // Wireless Headphones
        quantity: 1,
        price: 159.99,
      },
    ],
    created_at: new Date().toISOString(),
    total: 1090.94,
  },
  {
    id: 2,
    userId: 5, // Emma Wilson
    items: [
      {
        product_id: 11, // Women's Dress
        quantity: 2,
        price: 59.99,
      },
      {
        product_id: 16, // Smart Watch
        quantity: 1,
        price: 199.99,
      },
      {
        product_id: 14, // Table Lamp
        quantity: 3,
        price: 39.99,
      },
      {
        product_id: 9, // Yoga Mat
        quantity: 1,
        price: 34.99,
      },
    ],
    created_at: new Date().toISOString(),
    total: 474.93,
  },
];
