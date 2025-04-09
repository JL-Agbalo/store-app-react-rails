import { reviews } from "../data/reviewsData";
import { getUserInfoWithAvatar } from "../../auth/services/userService";

export const getReviewsByProductId = (productId) => {
  return reviews.filter((review) => review.productId === parseInt(productId));
};

export const getReviewsWithUser = (productId) => {
  const productReviews = getReviewsByProductId(productId);
  return productReviews.map((review) => ({
    ...review,
    user: getUserInfoWithAvatar(review.userId),
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

export const getReviewCount = (productId) => {
  return getReviewsByProductId(productId).length;
};
