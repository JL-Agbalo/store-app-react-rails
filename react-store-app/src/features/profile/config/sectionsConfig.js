import { lazy } from "react";

export const sections = {
  profile: {
    id: "profile",
    label: "Profile",
    component: lazy(() => import("../sections/ProfileSection/Profile")),
  },
  account: {
    id: "account",
    label: "Account",
    component: lazy(() => import("../sections/AccountSection/Account")),
  },
  payment: {
    id: "payment",
    label: "Cards & Bank Accounts",
    component: lazy(() => import("../sections/CardAndBankSection/CardAndBank")),
  },
  orderHistory: {
    id: "orderHistory",
    label: "Order History",
    component: lazy(() =>
      import("../sections/OrderHistorySection/OrderHistory")
    ),
  },
  notifications: {
    id: "notifications",
    label: "Notifications",
    component: lazy(() =>
      import("../sections/NotificationSection/Notifications")
    ),
  },
};
