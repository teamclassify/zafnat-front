import { useState } from "react";
import { products } from "../moks/products.json"; // Cambiado a "products" directamente

const options = [
  { name: "Mayor stock", value: "highStock" },
  { name: "Menor stock", value: "lowStock" },
  { name: "Categoría: Camisas", value: "shirts" },
  { name: "Categoría: Pantalones", value: "pants" },
];

export function useProductFilter() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleProductSelect = (filter) => {
    if (!filter) {
      setFilteredProducts(products);
      return;
    }

    let updatedProducts = [];
    switch (filter.value) {
      case "highStock":
        updatedProducts = [...products].sort(
          (a, b) => b.skus[0].quantity - a.skus[0].quantity
        );
        break;
      case "lowStock":
        updatedProducts = [...products].sort(
          (a, b) => a.skus[0].quantity - b.skus[0].quantity
        );
        break;
      case "shirts":
        updatedProducts = products.filter(
          (product) => product.category.name === "Camisas"
        );
        break;
      case "pants":
        updatedProducts = products.filter(
          (product) => product.category.name === "Pantalones"
        );
        break;
      default:
        updatedProducts = products;
    }

    setFilteredProducts(updatedProducts);
  };

  return { products: filteredProducts, options, handleProductSelect };
}
