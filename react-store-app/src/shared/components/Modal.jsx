import React from "react";
import { Close } from "../../shared/components/Icons/CommonIcons";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full h-full md:h-auto md:max-w-4xl bg-white shadow-xl md:rounded-2xl transform transition-all duration-300">
        <div className="flex flex-col h-full md:max-h-[85vh]">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:opacity-70 transition-opacity"
            >
              <Close className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
