import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../../features/products/components/ProductView";
import { getProductById } from "../../features/products/services/productService";
import RelatedProducts from "../../features/products/components/RelatedProducts";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  console.log("product", product);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductView product={product} loading={loading} />
      </Suspense>
      {product && (
        <Suspense fallback={<div>Loading...</div>}>
          <RelatedProducts
            categoryId={product.categoryId}
            productId={product.id}
            loading={loading}
          />
        </Suspense>
      )}
    </div>
  );
}

export default Product;
