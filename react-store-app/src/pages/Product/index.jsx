import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../../features/products/components/ProductView";
import { getProductById } from "../../services/productService";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await getProductById(id);
        console.log("Fetched product:", data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductView product={product} loading={loading} />
    </div>
  );
}

export default Product;
