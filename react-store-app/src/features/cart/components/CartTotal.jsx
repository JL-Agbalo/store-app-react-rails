function CartTotal({
  cartData = { items: [] },
  shipping = 0,
  taxRate = 0.1,
  discount = 0,
}) {
  const subtotal = cartData?.items?.reduce((sum, item) => sum + item.total, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax - discount;

  return (
    <div className="rounded-xl bg-gray-50 p-4 md:p-6 space-y-4 md:space-y-6 mx-2 md:mx-0">
      {/* Summary */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Subtotal ({cartData?.items?.length} items)
          </span>
          <span className="font-medium">${subtotal?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Shipping</span>
          <span className="text-green-600 font-medium">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-red-500">
          <span className="text-gray-500">Discount</span>
          <span className="font-medium">- ${discount.toFixed(2)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
