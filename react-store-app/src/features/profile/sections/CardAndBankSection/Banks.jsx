import React from "react";
import Button from "../../../../shared/components/Button";

function Banks() {
  return (
    <div>
      <h3 className="text-base font-medium text-gray-800 mb-4">
        Bank Accounts
      </h3>
      <div className="bg-gray-100 rounded-md divide-y divide-gray-100">
        <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white border rounded flex items-center justify-center">
              <span className="text-xs font-medium">BANK</span>
            </div>
            <div>
              <p className="text-sm text-gray-900">Main Account</p>
              <p className="text-xs text-gray-500">**** 1234</p>
            </div>
          </div>
          <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default Banks;
