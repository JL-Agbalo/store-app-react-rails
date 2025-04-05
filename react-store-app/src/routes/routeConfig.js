import { lazy } from "react";
import React from "react";
import { PUBLIC_ROUTES, AUTH_ROUTES } from "./routes";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/Auth/SignIn"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));
const Products = lazy(() => import("../pages/Products"));
const Product = lazy(() => import("../pages/Product"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Profile = lazy(() => import("../pages/Profile"));

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
    path: PUBLIC_ROUTES.CHECKOUT,
    element: React.createElement(Checkout),
  },
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
];
