import React, { useState, useEffect } from "react";
import NotificationCard from "./NotificationCard";
import { ArrowDown } from "../../../../shared/components/Icons/NotificationIcons";
import { getNotificationsByUserId } from "../../../../shared/services/notificationService";

function Notifications({ userId = 1 }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const data = getNotificationsByUserId(userId);
        setNotifications(data);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [userId]);
  console.log("notifications", notifications);
  console.log("filter", filter);
  return (
    <section className="p-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <div className="relative">
          <div className="flex items-center">
            <select
              className="px-3 py-2 pr-8 border rounded-lg text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-300 border-gray-200"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
            >
              <option value="all">All</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
            <div className="pointer-events-none absolute right-2">
              <ArrowDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  isOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notifications;
