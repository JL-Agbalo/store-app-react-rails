import Profile from "../components/Profile";
import Account from "../components/Account";
import CardAndBank from "../components/CardAndBank";
import OrderHistory from "../components/OrderHistory";
import Notification from "../components/Notification";

export const sections = {
  profile: {
    id: "profile",
    label: "Profile",
    component: Profile,
  },
  account: {
    id: "account",
    label: "Account",
    component: Account,
  },
  payment: {
    id: "payment",
    label: "Cards & Bank Accounts",
    component: CardAndBank,
  },
  orderHistory: {
    id: "orderHistory",
    label: "Order History",
    component: OrderHistory,
  },
  Notification: {
    id: "notifications",
    label: "Notifications",
    component: Notification,
  },
};
