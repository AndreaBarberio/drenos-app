import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between bg-transparent border border-gray-600 rounded-lg shadow p-4 w-80 max-h-[400]">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-md font-bold mt-2">€ {typeof product.price === "number" ? product.price : "0.00"}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 "
      >
        Aggiungi al Carrello
      </button>
    </div>
  );
}

export default ProductCard;
