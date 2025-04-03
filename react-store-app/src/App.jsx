import React, { useState } from "react";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";
import {
  privateRoutes,
  publicRoutes,
  commonRoutes,
} from "./routes/routeConfig";
import MainLayout from "./features/layout/components/Layout/MainLayout";
import AuthLayout from "./features/layout/components/Layout/AuthLayout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user] = useState({ id: 1 });
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Common Pages - Available to all */}
          <Route
            element={
              <MainLayout
                isAuthenticated={isAuthenticated}
                userId={user.id}
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

          {/* Auth Pages */}
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
                  userId={user.id}
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

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
