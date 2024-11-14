import { Link } from "wouter";
import ProductCard from "./ProductCard";

// TODO: pasar los productos como props a ProductCard
function ListOfProducts() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      <Link to="/producto/:id">
        <ProductCard
          id="1"
          name="Jean Slim Fit 'Clásico Urbano'"
          price="120,000"
          img="/assets/product.png"
        />
      </Link>
      <Link to="/producto/:id">
        <ProductCard
          id="1"
          name="Jean Slim Fit 'Clásico Urbano'"
          price="120,000"
          img="/assets/product.png"
        />
      </Link>
      <Link to="/producto/:id">
        <ProductCard
          id="1"
          name="Jean Slim Fit 'Clásico Urbano'"
          price="120,000"
          img="/assets/product.png"
        />
      </Link>
      <Link to="/producto/:id">
        <ProductCard
          id="1"
          name="Jean Slim Fit 'Clásico Urbano'"
          price="120,000"
          img="/assets/product.png"
        />
      </Link>
    </div>
  );
}

export default ListOfProducts;
