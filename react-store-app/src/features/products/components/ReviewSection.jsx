import React from "react";

function ReviewSection({ reviews }) {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-200"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="mt-20 border-t border-gray-100 pt-10">
      {reviews?.length > 0 ? (
        <div className="grid gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-base font-medium text-gray-600">
                    {review.user.firstName[0]}
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-medium text-gray-800">
                      {review.user.firstName} {review.user.lastName}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {new Date(review.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center mt-1 mb-3">
                    {renderStars(review.rating)}
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
