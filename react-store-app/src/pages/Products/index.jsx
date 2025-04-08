import React, { useState, useEffect } from "react";
import ProductGrid from "../../features/products/components/ProductGrid";
import ProductFilter from "../../features/products/components/ProductFilter";
import { getProductsByCategoryId } from "../../features/products/services/productService";

function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProductsByCategoryId(selectedCategory);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);
  console.log("products", products);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Products</h2>
        <ProductFilter
          onFilterChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      <ProductGrid products={products} loading={loading} />
    </div>
  );
}

export default ProductCatalog;
