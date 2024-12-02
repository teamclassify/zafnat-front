import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchProductsFromBackend = async () => {
  return [
    { id: 1, name: "Jean Classic Fit", quantity: 10 },
    { id: 2, name: "Chaqueta Denim Casual", quantity: 20 },
    { id: 3, name: "Short Casual Fit", quantity: 30 },
  ];
};

export function useStockAlerts(initialMinStock) {
  const [products, setProducts] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [notifiedProducts, setNotifiedProducts] = useState(new Set());
  const [minStock, setMinStock] = useState(() => {
    // Leer el valor inicial de localStorage o usar el inicial proporcionado
    return parseInt(localStorage.getItem("minStock")) || initialMinStock;
  });

  useEffect(() => {
    // Guardar el valor de minStock en el localStorage cuando cambia
    localStorage.setItem("minStock", minStock);
  }, [minStock]);

  useEffect(() => {
    const fetchAndValidateStock = async () => {
      const updatedProducts = await fetchProductsFromBackend();
      setProducts(updatedProducts);

      const lowStockAlerts = updatedProducts.filter(
        (product) => product.quantity < minStock
      );

      const newAlerts = [];
      lowStockAlerts.forEach((alert) => {
        if (!notifiedProducts.has(alert.id)) {
          toast.warn(`⚠️ Bajo stock: ${alert.name} (Existencias: ${alert.quantity})`);
          setNotifiedProducts((prevSet) => new Set(prevSet).add(alert.id));
          newAlerts.push(alert);
        }
      });

      setAlerts(newAlerts);
    };

    fetchAndValidateStock();
    const interval = setInterval(fetchAndValidateStock, 5000);

    return () => clearInterval(interval);
  }, [minStock, notifiedProducts]);

  return { products, alerts, minStock, setMinStock };
}
