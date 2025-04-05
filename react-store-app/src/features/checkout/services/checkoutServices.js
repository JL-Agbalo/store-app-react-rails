import { checkoutData } from "../data/checkoutData";
import { products } from "../../products/data/productsData";
import { getPrimaryImage } from "../../products/services/productService";

export const getCheckoutByUserId = (userId) => {
  console.log("checkoutData", checkoutData);
  const checkout = checkoutData.find((checkout) => checkout.userId === userId);

  if (!checkout) return null;

  const checkoutItems = checkout.items.map((item) => {
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
    id: checkout.id,
    userId: checkout.userId,
    items: checkoutItems,
    total: checkout.total,
    created_at: checkout.created_at,
  };
};
