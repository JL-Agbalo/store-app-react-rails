import Profile from "../sections/ProfileSection/Profile";
import Account from "../sections/AccountSection/Account";
import CardAndBank from "../sections/CardAndBankSection/CardAndBank";
import OrderHistory from "../sections/OrderHistorySection/OrderHistory";
import Notifications from "../sections/NotificationSection/Notifications";

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
  Notifications: {
    id: "notifications",
    label: "Notifications",
    component: Notifications,
  },
};
