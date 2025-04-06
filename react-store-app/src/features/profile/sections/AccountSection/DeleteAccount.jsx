import React, { useState } from "react";
import { Alert } from "../../../../shared/components/Icons/ProfileIcons";
function DeleteAccount() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmCheck, setConfirmCheck] = useState(false);

  return (
    <div className="my-4">
      <h3 className="text-base font-medium text-gray-800 mb-4">
        Delete Account
      </h3>
      <div className="p-4 rounded-xl bg-gray-100">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-red-600 mb-2 flex items-center gap-2">
              <Alert className="w-4 h-4 text-red-500" />
              Delete Your Account Permanently
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              This action cannot be undone. Once you delete your account, all of
              your data will be permanently removed and you won't be able to
              recover it.
            </p>
            {!showConfirm ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="px-4 py-2 text-sm font-medium text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                Delete Account
              </button>
            ) : (
              <div className="flex flex-col">
                <label className="flex items-start gap-3 mb-4">
                  <input
                    type="checkbox"
                    className="mt-1 text-red-600 rounded focus:ring-red-500"
                    checked={confirmCheck}
                    onChange={(e) => setConfirmCheck(e.target.checked)}
                  />
                  <span className="text-sm text-gray-700">
                    I understand that this action cannot be undone and all my
                    data will be lost
                  </span>
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => console.log("Delete account")}
                    disabled={!confirmCheck}
                    className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${
                      confirmCheck
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Permanently delete account
                  </button>
                  <button
                    onClick={() => {
                      setShowConfirm(false);
                      setConfirmCheck(false);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
