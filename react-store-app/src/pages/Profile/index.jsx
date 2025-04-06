import React, { useState } from "react";
import { ArrowDown } from "../../shared/components/Icons/ProfileIcons";
import Sidebar from "../../features/profile/Sidebar";
import { sections } from "../../features/profile/config/sectionsConfig";

function Profile() {
  const [activeSection, setActiveSection] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
