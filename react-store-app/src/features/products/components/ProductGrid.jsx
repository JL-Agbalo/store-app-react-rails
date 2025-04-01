import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-200 rounded-lg aspect-square"
          />
        ))}
      </div>
    );
  }

  if (!products?.length) {
    return (
      <p className="col-span-full text-center text-gray-500">
        No products found in this category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
