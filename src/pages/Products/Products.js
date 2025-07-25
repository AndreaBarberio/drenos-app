// src/pages/Products/ProductsPage.jsx
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/slices/productSlice';
import ChargeSpinner from '../../components/Charging/ChargeSpinner';
import DisplayerCard from '../../components/DisplayerCard/DisplayerCard';

function ProductsPage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return (
      <section className="section-column justify-center items-center min-h-screen">
        <ChargeSpinner />
      </section>
    );
  }

  if (status === 'failed') {
    return (
      <section className="section-column justify-center items-center min-h-screen">
        <p className="heading-s text-red-500">Errore nel caricamento dei prodotti.</p>
      </section>
    );
  }

  return (
    <div className='flex flex-col justify-evenly gap-8 m-0 p-16 w-full bg-transparent min-h-screen'>
      <header className="">
        <h1 className="heading-lg">I Nostri Prodotti</h1>
        <p className="paragraph-xl">
          Esplora la nostra selezione di articoli accuratamente selezionati per ogni esigenza.
        </p>
      </header>

      <DisplayerCard products={items} />
    </div>
  );
}

export default ProductsPage;
