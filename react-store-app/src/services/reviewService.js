import { reviews } from "../data/products/reviews";
import { getUserInfoWithAvatar } from "./userService";

const getReviewsByProductId = (productId) => {
  return reviews.filter((review) => review.product_id === parseInt(productId));
};

export const getReviewsWithUser = (productId) => {
  const productReviews = getReviewsByProductId(productId);
  return productReviews.map((review) => ({
    ...review,
    user: getUserInfoWithAvatar(review.user_id),
  }));
};

export const getProductReviewStats = (productId) => {
  const productReviews = getReviewsByProductId(productId);
  return {
    numberOfRatings: productReviews.length,
    averageRating: productReviews.length
      ? (
          productReviews.reduce((sum, review) => sum + review.rating, 0) /
          productReviews.length
        ).toFixed(1)
      : 0,
  };
};
