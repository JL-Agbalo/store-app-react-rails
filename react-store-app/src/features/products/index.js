import { lazy } from "react";

export const ProductView = lazy(() => import("./components/ProductView"));
export const ProductGrid = lazy(() => import("./components/ProductGrid"));
export const RelatedProducts = lazy(() =>
  import("./components/RelatedProducts")
);
export const ReviewSection = lazy(() => import("./components/ReviewSection"));
