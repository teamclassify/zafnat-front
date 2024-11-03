import DefaultTemplate from "../components/templates/DefaultTemplate";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { CheckboxDemo } from "../components/custom/CheckBoxDemo";
import { Separator } from "@/components/ui/separator";
import ProductCart from "../components/custom/ProductCart";
import Purchase from "../components/custom/Purchase";
import products from "../moks/products.json";
import { useState } from "react";

export default function Cart() {
  const [productSelect, setProductSelect] = useState("");

  const handleProductSelect = (product) => {
    if (productSelect.includes(product)) {
      setProductSelect(productSelect.filter((select) => select !== product));
    } else {
      setProductSelect([...productSelect, product]);
    }
  };

  return (
    <DefaultTemplate>
      <main>
        <BreadcrumbResponsive />
        <div className="pt-5">
          <div className="flex flex-col gap-3">
            <CheckboxDemo
              name={`${products.products.length} prendas seleccionada${
                products.products.length === 1 ? "" : "s"
              }`}
            ></CheckboxDemo>
            <Separator className="w-2/4" />
          </div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col gap-4 w-2/4">
              {products.products.map((product) => (
                <ProductCart
                  key={product.id}
                  name={product.name}
                  size={product.attributes[0].value}
                  quantity={1}
                  price={product.skus[0].price}
                  img="/assets/product.png"
                  handleProductSelect={handleProductSelect}
                />
              ))}
            </div>
            {productSelect[0] ? (
              <Purchase
                buy={false}
                name={productSelect[0].name}
                quantity={productSelect[0].quantity}
                price={productSelect[0].price}
                image={productSelect[0].img}
              />
            ) : (
              <Purchase buy={false} />
            )}
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
