import React, { useState, useEffect } from "react";
import { getRelatedProductsByCategoryId } from "../../products/services/productService";
import ProductGrid from "./ProductGrid";

function RelatedProducts({ categoryId, productId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      setLoading(true);
      try {
        const products = getRelatedProductsByCategoryId(categoryId, productId);
        setRelatedProducts(products);
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [categoryId, productId]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
      <ProductGrid products={relatedProducts} loading={loading} />
    </div>
  );
}

export default RelatedProducts;
