import React from "react";

function Sidebar({
  sections,
  activeSection,
  setActiveSection,
  setIsMobileMenuOpen,
}) {
  const handleSectionClick = (sectionKey) => {
    setActiveSection(sectionKey);
    setIsMobileMenuOpen?.(false);
  };

  return (
    <div className="w-full lg:w-64 bg-white rounded-lg shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          {Object.entries(sections).map(([key, { label }]) => (
            <li key={key}>
              <button
                onClick={() => handleSectionClick(key)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === key
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
