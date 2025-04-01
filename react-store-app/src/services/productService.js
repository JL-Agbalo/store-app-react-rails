import { products } from "../data/products/products.js";
import { productImages } from "../data/products/productImages.js";
import { categoryService } from "./categoryService";
import { getProductReviewStats, getReviewsWithUser } from "./reviewService";

const getProductImages = (productId) => {
  const images = productImages.filter((img) => img.product_id === productId);
  return {
    images,
    primaryImage: images.find((img) => img.is_primary)?.image_url,
  };
};

const getPrimaryImage = (productId) => {
  return productImages.find(
    (img) => img.product_id === productId && img.is_primary
  )?.image_url;
};

export const getProducts = () => {
  return products;
};

export const getProductsWithImages = () => {
  return products.map((product) => ({
    ...product,
    ...getProductImages(product.id),
  }));
};

// For Products List Page
export const getProductsByCategoryId = (categoryId) => {
  const allProducts = getProducts();
  const filteredProducts =
    categoryId === 1 || categoryId === "1"
      ? allProducts
      : allProducts.filter(
          (product) => product.category_id === parseInt(categoryId)
        );

  return filteredProducts.map((product) => ({
    ...product,
    primaryImage: getPrimaryImage(product.id),
    ...getProductReviewStats(product.id),
  }));
};

export const getProductById = (productId) => {
  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) return null;

  const category = categoryService.getCategoryById(product.category_id);

  return {
    ...product,
    ...getProductImages(product.id),
    categoryName: category?.name || "Uncategorized",
    reviews: getReviewsWithUser(product.id),
    ...getProductReviewStats(product.id),
  };
};
