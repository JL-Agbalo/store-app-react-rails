import React from "react";
import {
  Google,
  Facebook,
  Github,
} from "../../../shared/components/Icons/AuthIcons";
function SocialMediaAuth({ title }) {
  return (
    <div className="mt-8">
      <p className="text-center text-gray-500 mb-4">{title}</p>
      <div className="flex flex-row justify-center gap-4">
        <button className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-auto">
          <Google className="w-5 h-5" />
          <span className="hidden md:inline">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-auto">
          <Facebook className="w-5 h-5" />
          <span className="hidden md:inline">Facebook</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition w-auto">
          <Github className="w-5 h-5" />
          <span className="hidden md:inline">GitHub</span>
        </button>
      </div>
    </div>
  );
}

export default SocialMediaAuth;
