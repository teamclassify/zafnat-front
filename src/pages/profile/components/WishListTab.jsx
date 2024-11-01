import ListOfProducts from "../../../components/catalog/ListOfProducts";
import HeaderTab from "./HeaderTab";

function WishListTab() {
  const wishList = [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <HeaderTab title="Lista de deseados" />

      {/* Pasarlos como prop */}
      <ListOfProducts />
    </div>
  );
}

export default WishListTab;
