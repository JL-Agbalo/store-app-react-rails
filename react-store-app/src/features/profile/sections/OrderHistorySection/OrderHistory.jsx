import React, { useEffect, useState } from "react";
import { filterOrders } from "../../service/orderHistoryService";
import OrderFilter from "./OrderFilter";
import OrderTable from "./OrderTable";

function OrderHistory({ userId = 1 }) {
  const [orderHistory, setOrderHistory] = useState({});
  // const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    status: "all",
  });

  const filterOrdersByStatus = () => {
    return filterOrders(orderHistory, filters.status);
  };

  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div>
        <div className="mb-8">
          <OrderFilter filters={filters} onFilterChange={setFilters} />
          <div className="bg-white border border-gray-100 rounded-sm">
            <div className="overflow-x-auto">
              {filterOrdersByStatus().length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No orders found</p>
                </div>
              ) : (
                <OrderTable />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderHistory;
