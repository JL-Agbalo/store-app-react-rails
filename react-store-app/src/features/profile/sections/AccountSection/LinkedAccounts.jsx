import React from "react";
import {
  Google,
  Facebook,
  Github,
} from "../../../../shared/components/Icons/ProfileIcons";
function LinkedAccounts() {
  const accounts = [
    { name: "Google", icon: Google, connected: true },
    { name: "Facebook", icon: Facebook, connected: false },
    { name: "GitHub", icon: Github, connected: true },
  ];

  const handleAccountClick = (account) => {
    if (account.connected) {
      // Handle disconnect
      console.log(`Disconnecting ${account.name}`);
    } else {
      // Handle connect
      console.log(`Connecting ${account.name}`);
    }
  };
  // TODO WHEN IN MOBILE USE ICON ONLY
  return (
    <div className="my-4">
      <h3 className="text-base font-medium text-gray-800 mb-4">
        Linked Accounts
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Connect your accounts to enable quick sign-in and sync your data across
        different platforms.
      </p>
      <div className="flex gap-4">
        {accounts.map((account) => (
          // TODO Apply Reusable Button here
          <button
            key={account.name}
            onClick={() => handleAccountClick(account)}
            className={`flex-1 p-2 rounded-lg transition-all cursor-pointer active:scale-95 ${
              account.connected
                ? account.name === "Google"
                  ? "bg-red-500 hover:bg-red-600 active:bg-red-700"
                  : account.name === "Facebook"
                  ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                  : "bg-gray-800 hover:bg-gray-900 active:bg-black"
                : "bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <account.icon
                className={`w-5 h-5 ${
                  account.connected ? "text-white" : "text-gray-500"
                }`}
              />
              <span
                className={`font-medium ${
                  account.connected ? "text-white" : "text-gray-500"
                }`}
              >
                {account.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LinkedAccounts;
