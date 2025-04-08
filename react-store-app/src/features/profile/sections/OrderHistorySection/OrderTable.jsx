import React from "react";
import OrderTableRow from "./OrderTableRow";

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
        {orders.map((order, index) => (
          <OrderTableRow key={index} order={order} />
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
