import { lazy } from "react";
import React from "react";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/Auth/SignIn"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));
const Products = lazy(() => import("../pages/Products"));
const Product = lazy(() => import("../pages/Product"));
const Checkout = lazy(() => import("../pages/Checkout"));

// Public routes (no auth required)
export const publicRoutes = [
  {
    path: "/signin",
    element: React.createElement(SignIn),
  },
  {
    path: "/signup",
    element: React.createElement(SignUp),
  },
];

// Private routes (auth required)
export const privateRoutes = [
  {
    path: "/checkout",
    element: React.createElement(Checkout),
  },
];

// Common routes (accessible to all)
export const commonRoutes = [
  {
    path: "/",
    element: React.createElement(Home),
  },
  {
    path: "/products",
    element: React.createElement(Products),
  },
  {
    path: "/product/:id",
    element: React.createElement(Product),
  },
];
