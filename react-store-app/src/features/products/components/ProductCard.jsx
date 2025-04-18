import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../../../shared/components/StarRating";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group transform hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <img
        src={product.primaryImage}
        alt={product.title}
        className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-80 transition-opacity duration-300"
      />
      <h3 className="mt-4 text-base text-gray-800 truncate max-w-full">
        {product.name}
      </h3>
      <p className="text-sm text-gray-600">{product.category_name}</p>
      <div className="flex items-center mt-1">
        <StarRating rating={product.averageRating} className="h-4 w-4" />
        <span className="ml-2 text-sm text-gray-500">
          ({product.numberOfRatings || 0})
        </span>
      </div>
      <p className="mt-1 text-sm sm:text-base md:text-lg font-semibold text-gray-900">
        ${product.price}
      </p>
    </Link>
  );
}

export default ProductCard;
