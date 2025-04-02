import { carts } from "../data/cart/cart";
import { products } from "../data/products/products";
import { getPrimaryImage } from "./productService";

export const getCartByUserId = (userId) => {
  const cart = carts.find((cart) => cart.userId === userId);

  if (!cart) return null;

  const cartItems = cart.items.map((item) => {
    const product = products.find((p) => p.id === item.product_id);
    return {
      product_id: item.product_id,
      name: product.name,
      price: item.price,
      quantity: item.quantity,
      primaryImage: getPrimaryImage(item.product_id),
      total: item.price * item.quantity,
    };
  });

  return {
    id: cart.id,
    userId: cart.userId,
    items: cartItems,
    total: cart.total,
    created_at: cart.created_at,
  };
};
