import React, { Suspense } from "react";

// Separate Loading component for better organization
export const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-xl font-semibold text-gray-700">
      Loading...
    </div>
  </div>
);

/**
 * Higher Order Component for lazy loading components with Suspense
 * @param {React.LazyExoticComponent} Component - Lazy loaded component
 * @returns {React.FC} Wrapped component with Suspense and Loading fallback
 */
export const lazyImport = (Component) => (props) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
