import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./index";
import { publicRoutes, privateRoutes, commonRoutes } from "./routeConfig";
import MainLayout from "../features/layout/components/Layout/MainLayout";
import AuthLayout from "../features/layout/components/Layout/AuthLayout";

function AppRouter({ isAuthenticated, setIsAuthenticated, currentUser }) {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Common Pages - Available to all */}
          <Route
            element={
              <MainLayout
                isAuthenticated={isAuthenticated}
                currentUser={currentUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          >
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
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
            <Route
              element={
                <MainLayout
                  isAuthenticated={isAuthenticated}
                  currentUser={currentUser}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            >
              {privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Route>

          {/* Fallback for undefined routes */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
