import { notifications } from "../../features/profile/data/notificationData";

export const getNotificationsByUserId = (userId) => {
  return notifications
    .filter((notification) => notification.user_id === parseInt(userId))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};

export const getUnreadNotificationCount = (userId) => {
  return notifications.filter(
    (notification) =>
      notification.user_id === parseInt(userId) && !notification.is_read
  ).length;
};
