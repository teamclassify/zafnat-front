import ProductCard from "./ProductCard";

function ListOfProducts({ products }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          productId={product.id}
          name={product.name}
          price={product.ProductSku[0]?.price}
          img={product.ProductSku[0]?.photos[0]?.value}
        />
      ))}
    </div>
  );
}

export default ListOfProducts;
