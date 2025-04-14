import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./index";
import { publicRoutes, privateRoutes, commonRoutes } from "./routeConfig";
import MainLayout from "../features/layout/components/Layout/MainLayout";
import AuthLayout from "../features/layout/components/Layout/AuthLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Common Pages - Available to all */}
          <Route element={<MainLayout />}>
            {commonRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>

          {/* Public Pages */}
          <Route element={<PublicRoutes />}>
            <Route element={<AuthLayout />}>
              {publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Route>

          {/* Protected Pages */}
          <Route element={<PrivateRoutes />}>
            <Route element={<MainLayout />}>
              {privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
