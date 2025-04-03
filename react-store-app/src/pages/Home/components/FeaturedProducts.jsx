import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductsSortedByReviews } from "../../../features/products/services/productService";
import ProductGrid from "../../../features/products/components/ProductGrid";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const featuredProducts = await getProductsSortedByReviews();
        setProducts(featuredProducts);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="w-full bg-gray-100 py-15">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 space-y-4">
          <div className="w-12 h-[1px] bg-black"></div>
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Curated Selection
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-light">Featured Products</h2>
            <Link
              to="/products"
              className="text-sm hover:underline underline-offset-4"
            >
              View All Products →
            </Link>
          </div>
        </div>

        <ProductGrid products={products} loading={loading} />
      </div>
    </section>
  );
}

export default FeaturedProducts;
