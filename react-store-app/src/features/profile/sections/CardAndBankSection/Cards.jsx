import React from "react";
import Button from "../../../../shared/components/Button";
function Cards() {
  return (
    <div>
      <h3 className="text-base font-medium text-gray-800 mb-4">Cards</h3>
      <div className="bg-gray-100 rounded-md divide-y divide-gray-100">
        <div className="p-4 flex items-center justify-between hover:bg-gray-50">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-6 bg-white border rounded flex items-center justify-center">
              <span className="text-xs font-medium">VISA</span>
            </div>
            <div>
              <p className="text-sm text-gray-900">•••• 4242</p>
              <p className="text-xs text-gray-500">Expires 12/24</p>
            </div>
          </div>
          <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
