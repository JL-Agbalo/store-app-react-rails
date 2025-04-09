import { carts } from "../data/cartData";
import { products } from "../../products/data/productsData";
import { getPrimaryImage } from "../../products/services/productService";

export const getCartByUserId = (userId) => {
  const cart = carts.find((cart) => cart.userId === userId);

  if (!cart) return null;

  const cartItems = cart.items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      productId: item.productId,
      name: product.name,
      price: item.price,
      quantity: item.quantity,
      primaryImage: getPrimaryImage(item.productId),
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
