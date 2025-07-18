import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

function CartPanel() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) return <p className="p-6 text-center">Il carrello è vuoto.</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Il tuo Carrello</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name} × {item.quantity}</span>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPanel;
