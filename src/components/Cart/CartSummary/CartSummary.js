import { useSelector } from "react-redux";

function CartSummary() {
  const { items } = useSelector(state => state.cart);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Totale: € {total.toFixed(2)}</h3>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Procedi al Checkout</button>
    </div>
  );
}

export default CartSummary;
