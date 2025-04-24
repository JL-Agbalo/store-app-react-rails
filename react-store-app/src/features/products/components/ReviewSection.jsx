import React, { useState, useEffect } from "react";
import StarRating from "../../../shared/components/StarRating";
import { getReviewsWithUser } from "../../../features/products/services/reviewService";
function ReviewSection({ productId }) {
  const [reviewsData, setReviews] = useState([]);
  const [looding, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const data = getReviewsWithUser(productId);
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);
  console.log("reviewsData", reviewsData);
  return (
    <div className="mt-20 border-t border-gray-100 pt-10">
      {reviewsData?.length > 0 ? (
        <div className="grid gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                  {review.user.avatar_url ? (
                    <img
                      src={review.user.avatar_url}
                      alt={`${review.user.first_name}'s avatar`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-base font-medium text-gray-600">
                      {review.user.first_name[0]}
                    </span>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-medium text-gray-800">
                      {review.user.first_name} {review.user.last_name}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {new Date(review.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center mt-1 mb-3">
                    <StarRating rating={review.rating} className="w-5 h-5" />
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-500">
            No reviews yet. Be the first to leave a review!
          </p>
        </div>
      )}
    </div>
  );
}

export default ReviewSection;
