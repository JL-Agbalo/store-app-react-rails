import React, { useState, useEffect, Suspense } from "react";
import { ArrowDown } from "../../shared/components/Icons/ProfileIcons";
import Sidebar from "../../features/profile/Sidebar";
import { sections } from "../../features/profile/config/sectionsConfig";
import { getUserDetailsById } from "../../features/auth/services/userService";

function Profile({ userId = 1 }) {
  const [activeSection, setActiveSection] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const data = await getUserDetailsById(userId);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId, activeSection]);
  if (loading) {
    return <div>Loading...</div>;
  }

  const ActiveComponent = sections[activeSection].component;

  // Group sidebar-related props
  const sidebarProps = {
    sections,
    activeSection,
    setActiveSection,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full p-4 bg-white rounded-lg shadow-md flex items-center justify-between"
          >
            <span className="font-medium">{sections[activeSection].label}</span>
            <ArrowDown
              className={`w-5 h-5 transition-transform ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <aside
            className={` ${isMobileMenuOpen ? "block" : "hidden"} lg:block`}
          >
            <Sidebar {...sidebarProps} />
          </aside>

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-3">
              <Suspense fallback={<div>Loading section...</div>}>
                <ActiveComponent user={userData} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
