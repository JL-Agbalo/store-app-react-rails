import { products } from "../data/products/products.js";
import { productImages } from "../data/products/productImages.js";
import { categoryService } from "./categoryService";
import { productReviews } from "../data/products/productReviews";
import { getUserDetails } from "./userService";

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

const getProductImages = (productId) => {
  const images = productImages.filter((img) => img.product_id === productId);
  return {
    images,
    primaryImage: images.find((img) => img.is_primary)?.image_url,
  };
};

const getProductReviews = (productId) => {
  return productReviews
    .filter((review) => review.product_id === productId)
    .map((review) => ({
      ...review,
      user: getUserDetails(review.user_id),
    }));
};

const calculateAverageRating = (reviews) => {
  return reviews.length
    ? (
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      ).toFixed(1)
    : 0;
};

export const getProductById = (productId) => {
  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) return null;

  const { images, primaryImage } = getProductImages(product.id);
  const category = categoryService.getCategoryById(product.category_id);
  const reviews = getProductReviews(product.id);

  return {
    ...product,
    images,
    primaryImage,
    categoryName: category?.name || "Uncategorized",
    reviews,
    averageRating: calculateAverageRating(reviews),
  };
};
