import { lazy } from "react";
import React from "react";
import { PUBLIC_ROUTES, AUTH_ROUTES } from "./routes";
import { lazyImport } from "../utils/lazyImport";

// Lazy load pages
const Home = lazyImport(lazy(() => import("../pages/Home")));
const SignIn = lazyImport(lazy(() => import("../pages/Auth/SignIn")));
const SignUp = lazyImport(lazy(() => import("../pages/Auth/SignUp")));
const Products = lazyImport(lazy(() => import("../pages/Products")));
const Product = lazyImport(lazy(() => import("../pages/Product")));
const Checkout = lazyImport(lazy(() => import("../pages/Checkout")));
const Profile = lazyImport(lazy(() => import("../pages/Profile")));

// Public routes (no auth required)
export const publicRoutes = [
  {
    path: AUTH_ROUTES.SIGNIN,
    element: React.createElement(SignIn),
  },
  {
    path: AUTH_ROUTES.SIGNUP,
    element: React.createElement(SignUp),
  },
];

// Private routes (auth required)
export const privateRoutes = [
  {
    path: AUTH_ROUTES.PROFILE,
    element: React.createElement(Profile),
  },
];

// Common routes (accessible to all)
export const commonRoutes = [
  {
    path: PUBLIC_ROUTES.HOME,
    element: React.createElement(Home),
  },
  {
    path: PUBLIC_ROUTES.PRODUCTS,
    element: React.createElement(Products),
  },
  {
    path: PUBLIC_ROUTES.PRODUCT_DETAIL,
    element: React.createElement(Product),
  },
  {
    path: PUBLIC_ROUTES.CHECKOUT,
    element: React.createElement(Checkout),
  },
];
