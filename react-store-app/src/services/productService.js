import { products } from "../data/products/products.js";
import { productImages } from "../data/products/productImages.js";

export const getProductById = (id) => {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return null;
  }

  const images = productImages.filter((img) => img.product_id === id);

  return {
    ...product,
    images: images,
    primaryImage: images.find((img) => img.is_primary)?.image_url,
  };
};

export const getProducts = () => {
  return products.map((product) => {
    const images = productImages.filter((img) => img.product_id === product.id);
    return {
      ...product,
      images: images,
      primaryImage: images.find((img) => img.is_primary)?.image_url,
    };
  });
};

export const getProductsByCategoryId = (categoryId) => {
  const allProducts = getProducts();
  if (categoryId === 1 || categoryId === "1") {
    return allProducts;
  }
  return allProducts.filter(
    (product) => product.category_id === parseInt(categoryId)
  );
};
