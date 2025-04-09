import React, { useState, useEffect } from "react";
import {
  Minus,
  Plus,
  ShoppingBag,
} from "../../../shared/components/Icons/ProductIcons";
import StarRating from "../../../shared/components/StarRating";
import ReviewSection from "./ReviewSection";

function ProductView({ product, loading }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  console.log("product", product);
  useEffect(() => {
    if (product) {
      const primaryImage = product.images?.find(
        (img) => img.is_primary
      )?.image_url;
      setSelectedImage(primaryImage || product.primaryImage);
    }
  }, [product]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (loading) {
    return (
      <div className="animate-pulse max-w-6xl mx-auto p-6 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-96 bg-gray-100 rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-100 rounded w-3/4"></div>
            <div className="h-6 bg-gray-100 rounded w-1/4"></div>
            <div className="h-24 bg-gray-100 rounded"></div>
            <div className="h-10 bg-gray-100 rounded w-full mt-8"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-6 my-10 text-center">
        <div className="p-8 bg-gray-50 rounded-lg">
          <h2 className="text-xl text-gray-600">Product not found</h2>
          <p className="mt-2 text-gray-500">
            This product may not exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-container max-w-6xl mx-auto p-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Product Images */}
        <div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full object-cover h-80 transition-opacity duration-500 ease-in-out"
            />
          </div>
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {product.images
              ?.sort((a, b) => a.order - b.order)
              .map((image) => (
                <div
                  key={image.id}
                  className={`p-0.5 rounded-lg cursor-pointer transition-all ${
                    selectedImage === image.image_url
                      ? "ring-2 ring-black"
                      : "ring-1 ring-gray-300 hover:ring-gray-400"
                  }`}
                  onClick={() => setSelectedImage(image.image_url)}
                >
                  <img
                    src={image.image_url}
                    alt={`${product.title} ${image.order}`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-medium text-gray-900">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <StarRating rating={product.averageRating} className="w-5 h-5" />
              <span className="text-sm text-gray-500">
                {product.averageRating} ({product.reviews?.length || 0} reviews)
              </span>
            </div>

            <div className="mt-6 border-t border-b border-gray-100 py-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-light text-gray-900">
                  ${product.price}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-gray-50 text-gray-600">
                  {product.stock > 10
                    ? "In Stock"
                    : product.stock > 0
                    ? `Only ${product.stock} left`
                    : "Out of Stock"}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center mt-6">
                <span className="text-sm text-gray-500 mr-2">Category:</span>
                <span className="text-sm bg-gray-50 px-3 py-1 rounded-full">
                  {product.categoryName}
                </span>
              </div>
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="p-2 text-gray-400 hover:text-black hover:bg-gray-50 transition-colors"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-gray-800 font-medium min-w-8 text-center">
                  {quantity}
                </span>
                <button
                  className="p-2 text-gray-400 hover:text-black hover:bg-gray-50 transition-colors"
                  onClick={increaseQuantity}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center group text-sm"
                disabled={product.stock === 0}
              >
                <ShoppingBag className="mr-2 w-4 h-4 transition-transform group-hover:scale-110" />
                Add to Cart
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-white border border-black text-black hover:bg-gray-50 transition-colors font-medium text-sm"
                disabled={product.stock === 0}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReviewSection productId={product.id} />
    </div>
  );
}

export default ProductView;
