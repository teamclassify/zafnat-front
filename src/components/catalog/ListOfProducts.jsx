import ProductCard from "./ProductCard";

function ListOfProducts({ products }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img || "/assets/product.png"}
        />
      ))}
    </div>
  );
}

export default ListOfProducts;
