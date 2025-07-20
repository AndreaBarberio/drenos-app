import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productSlice';
import { useEffect } from 'react';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
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
    <div className="flex flex-row justify-between p-16">
      {items.map((product, i) => (
        <ProductCard key={i} product={{ ...product }}></ProductCard>
      ))
      }


    </div >
  );
}
export default ProductsPage;