import ListOfProducts from "../../../components/catalog/ListOfProducts";
import HeaderTab from "./HeaderTab";

function WishListTab() {
  const whislist = [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      ProductSku: [
        {
          id: 1,
          sku: "SKU12345",
          size_attribute_id: 1,
          color_attribute_id: 2,
          price: 75.0,
          photos: [
            {
              value: "/assets/product.png",
            },
          ],
          quantity: 30,
          created_at: "2024-10-28T10:00:00Z",
        },
      ],
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
      ProductSku: [
        {
          id: 2,
          sku: "SKU67890",
          size_attribute_id: 2,
          color_attribute_id: 3,
          price: 150.0,
          photos: [
            {
              value: "/assets/product.png",
            },
          ],
          quantity: 20,
          created_at: "2024-10-28T10:00:00Z",
        },
      ],
    },
    {
      id: 3,
      name: "Producto 3",
      price: 300,
      ProductSku: [
        {
          id: 3,
          sku: "SKU11223",
          size_attribute_id: 3,
          color_attribute_id: 4,
          price: 250.0,
          photos: [
            {
              value: "/assets/product.png",
            },
          ],
          quantity: 15,
          created_at: "2024-10-28T10:00:00Z",
        },
      ],
    },
  ];
  return (
    <div>
      <HeaderTab title="Lista de deseados" />
      <ListOfProducts products={whislist} />
    </div>
  );
}

export default WishListTab;
