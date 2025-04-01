import {
  Home,
  Products,
  Contact,
  User,
  Bag,
  Setting,
  Help,
  Bell,
  Logout,
} from "../../../shared/components/icons/NavigationIcons";

// Main navigation links (primary navigation)
export const mainNavLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/products", label: "Products", icon: Products },
  { to: "/contact", label: "Contact Us", icon: Contact },
];

// User-related navigation links (secondary navigation)
export const userNavLinks = [
  { to: "/profile", label: "My Account", icon: User },
  { to: "/orders", label: "My Orders", icon: Bag, hasNotification: true },
  {
    to: "/notifications",
    label: "Notifications",
    icon: Bell,
    hasNotification: true,
  },
  { to: "/settings", label: "Settings", icon: Setting },
  { to: "/help", label: "Help", icon: Help },
];
