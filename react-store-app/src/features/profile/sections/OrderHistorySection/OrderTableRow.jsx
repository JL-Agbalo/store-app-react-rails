import Button from "../../../../shared/components/Button";
const getStatusStyles = (status) => {
  switch (status.toLowerCase()) {
    case "delivered":
      return "bg-green-50 text-green-700 border-green-200";
    case "processing":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "cancelled":
      return "bg-red-50 text-red-700 border-red-200";
    case "pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "shipped":
      return "bg-purple-50 text-purple-700 border-purple-200";
    default:
      return "bg-gray-50 text-gray-600 border-gray-200";
  }
};

function OrderTableRow({ order, onSelectOrder }) {
  return (
    <>
      <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
        <td className="py-3 px-4 text-sm text-gray-950 font-medium text-center">
          {order?.id}
        </td>
        <td className="py-3 px-4 text-sm text-gray-500 text-center">
          {new Date(order?.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </td>
        <td className="py-3 px-4 text-center">
          <span
            className={`px-2 py-1 text-xs font-medium border rounded-md ${getStatusStyles(
              order?.status
            )}`}
          >
            {order?.status}
          </span>
        </td>
        <td className="py-3 px-4 text-sm text-gray-900 text-center">
          ${order?.total.toFixed(2)}
        </td>
        <td className="py-3 px-4 text-center">
          <Button onClick={() => onSelectOrder(order.id)}>Details</Button>
        </td>
      </tr>
    </>
  );
}

export default OrderTableRow;
