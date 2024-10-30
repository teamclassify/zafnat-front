import Product from "./Product";

export function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {products.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          image={"/assets/img/" + product.photos[0].value}
          reviews={product.reviews}
          price={product.skus[0].price}
        />
      ))}
    </div>
  );
}
