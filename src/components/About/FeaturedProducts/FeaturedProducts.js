import ProductCard from "../../Product/ProductCard/ProductCard";
const FeaturedProducts = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="section-light items-center">
      <h2 className="heading-s mb-4">Prodotti Consigliati</h2>
      <div className="flex flex-wrap justify-center gap-6 w-fit h-fit">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
