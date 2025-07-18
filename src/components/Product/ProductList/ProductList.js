import ProductCard from "./ProductCard";
import mockProducts from "../../data/mockProducts";

function ProductList() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {mockProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
