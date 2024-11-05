import { useState } from "react";
import initialProducts from "../moks/products.json";

export default function useProductSelect() {
  const [products, setProducts] = useState(initialProducts);
  const [productSelect, setProductSelect] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleProductSelect = (product) => {
    if (
      productSelect.some(
        (select) => select.name === product.name && select.size === product.size
      )
    ) {
      setProductSelect(
        productSelect.filter(
          (select) =>
            !(select.name === product.name && select.size === product.size)
        )
      );
    } else {
      setProductSelect([...productSelect, product]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setProductSelect([]);
    } else {
      const allProducts = products.products.map((product) => ({
        name: product.name,
        size: product.attributes[0].value,
        quantity: 1,
        price: product.skus[0].price,
        img: "/assets/product.png",
      }));
      setProductSelect(allProducts);
    }
    setSelectAll(!selectAll);
  };

  const handleDisableProduct = (productToRemove) => {
    const aux = products.products.filter((p) => p.id !== productToRemove.id);
    setProducts({ products: aux });
  };

  const size = productSelect.length;

  return {
    handleDisableProduct,
    handleProductSelect,
    handleSelectAll,
    size,
    products,
    selectAll,
    productSelect,
  };
}
