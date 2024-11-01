import Product from "./Product";

export function ProductGrid({ products }) {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {products.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          image={"/assets/product.png"}
          reviews={product.reviews}
          price={product.skus[0].price}
        />
      ))}
    </div>
  );
}
