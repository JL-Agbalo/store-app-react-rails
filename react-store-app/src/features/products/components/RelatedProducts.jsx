import React, { useState, useEffect } from "react";
import { getRelatedProductsByCategoryId } from "../../../services/productService";
import ProductGrid from "./ProductGrid";

function RelatedProducts({ category_id, product_id }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      setLoading(true);
      try {
        const products = getRelatedProductsByCategoryId(
          category_id,
          product_id
        );
        setRelatedProducts(products);
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [category_id, product_id]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
      <ProductGrid products={relatedProducts} loading={loading} />
    </div>
  );
}

export default RelatedProducts;
