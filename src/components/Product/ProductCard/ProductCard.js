import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-md font-bold mt-2">€ {product.price.toFixed(2)}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Aggiungi al Carrello
      </button>
    </div>
  );
}

export default ProductCard;
