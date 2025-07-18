import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productSlice';
import { useEffect } from 'react';
import ChargeSpinner from '../../components/Charging/ChargeSpinner';
function ProductsPage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <ChargeSpinner />;
  if (status === 'failed') return <p>Errore nel caricamento</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(product => (
        <div key={product.id} className="p-4 border rounded">
          <h3>{product.name}</h3>
          <p>{product.price} €</p>
          {/* bottone addToCart */}
        </div>
      ))}
    </div>
  );
}
export default ProductsPage;