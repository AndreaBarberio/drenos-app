// src/components/Product/DisplayerCard.jsx
import ProductCard from "../Product/ProductCard/ProductCard"

function DisplayerCard({ products = [] }) {
  if (products.length === 0) {
    return (
      <div className="w-full text-center py-16">
        <p className="text-lg text-gray-600">Nessun prodotto disponibile al momento.</p>
      </div>
    );
  }

  return (

    <section className="flex md:flex-row flex-col gap-4 items-center md:items-stretch justify-between">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>

  );
}

export default DisplayerCard;
