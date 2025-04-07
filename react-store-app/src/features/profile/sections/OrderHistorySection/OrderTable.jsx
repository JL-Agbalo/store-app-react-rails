import React from "react";
import Button from "../../../../shared/components/Button";

function OrderTable({ orders }) {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="border-b border-gray-100">
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Order ID
          </th>
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Order Date
          </th>
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Status
          </th>
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Total
          </th>
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order?.id} className="border-b border-gray-100">
            <td className="text-center py-3 px-4 text-sm text-gray-700">
              {order?.id}
            </td>
            <td className="text-center py-3 px-4 text-sm text-gray-700">
              {order?.date}
            </td>
            <td className="text-center py-3 px-4 text-sm text-gray-700">
              {order?.status}
            </td>
            <td className="text-center py-3 px-4 text-sm text-gray-700">
              ${order?.total.toFixed(2)}
            </td>
            <td className="py-3 px-4 text-center">
              <Button>Details</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
