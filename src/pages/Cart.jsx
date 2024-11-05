import DefaultTemplate from "../components/templates/DefaultTemplate";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { Separator } from "@/components/ui/separator";
import ProductCart from "../components/custom/ProductCart";
import Purchase from "../components/custom/Purchase";
import initialProducts from "../moks/products.json";
import { useState } from "react";
import { CheckBoxProductPay } from "../components/custom/CheckBoxProductPay";

export default function Cart() {
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
    const aux = products.products.filter((p) => p.id !== productToRemove.id)
    setProducts({ products: aux }); 
  };

  return (
    <DefaultTemplate>
      <main>
        <BreadcrumbResponsive />
        <div className="pt-5">
          <div className="flex flex-col gap-3">
            <CheckBoxProductPay
              name={`${productSelect.length} prendas seleccionada${
                productSelect.length === 1 ? "" : "s"
              }`}
              product={products}
              handleProductSelect={handleSelectAll}
              isChecked={selectAll}
            ></CheckBoxProductPay>
            <Separator className="w-2/4" />
          </div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col gap-4 w-2/4">
              {products.products.map((product) => (
                <ProductCart
                  id={product.id}
                  key={product.id}
                  name={product.name}
                  size={product.attributes[0].value}
                  quantity={1}
                  price={product.skus[0].price}
                  img="/assets/product.png"
                  handleProductSelect={handleProductSelect}
                  isChecked={productSelect.some(
                    (select) =>
                      select.name === product.name &&
                      select.size === product.attributes[0].value
                  )}
                  handleDisableProduct={handleDisableProduct}
                />
              ))}
            </div>
            <Purchase
              //buy={false}
              //name={productSelect.name}
              //quantity={productSelect.quantity}
              //price={productSelect.price}
              //image={productSelect.img}
              products={productSelect.length > 0 ? productSelect : null}
            />
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
