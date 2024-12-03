import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchProductsFromBackend = async () => {
  return [
    { id: 1, name: "Jean Classic Fit", quantity: 10 },
    { id: 2, name: "Chaqueta Denim Casual", quantity: 20 },
    { id: 3, name: "Short Casual Fit", quantity: 30 },
  ];
};

export function useStockAlerts(defaultMinStock, isAlertStockPage) {
  const [products, setProducts] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [minStock, setMinStock] = useState(() =>
    parseInt(localStorage.getItem("minStock")) || defaultMinStock
  );
  const notifiedProductsRef = useRef(new Set());

  useEffect(() => {
    // Borra las notificaciones al recargar la página
    localStorage.removeItem("notifications");

    const fetchAndValidateStock = async () => {
      const updatedProducts = await fetchProductsFromBackend();
      setProducts(updatedProducts);

      // Filtrar productos con stock bajo
      const lowStockAlerts = updatedProducts.filter(
        (product) => product.quantity < minStock
      );
      setAlerts(lowStockAlerts);

      // Verificar si ya hay notificaciones para los productos con stock bajo
      const storedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];

      // Identificar nuevos productos con stock bajo que no están en las notificaciones previas
      const newAlerts = lowStockAlerts.filter(
        (product) => !storedNotifications.some((notification) => notification.id === product.id)
      );

      // Si hay nuevos productos con stock bajo que no han sido notificados, mostrar alerta
      if (newAlerts.length) {
        // Actualizar el historial de notificaciones en localStorage
        const newNotifications = [
          ...storedNotifications,
          ...newAlerts.map((product) => ({ id: product.id, message: `⚠️ Bajo stock en: ${product.name}` })),
        ];
        localStorage.setItem("notifications", JSON.stringify(newNotifications));

        // Agregar a la referencia de notificados
        newAlerts.forEach((product) => notifiedProductsRef.current.add(product.id));

        // Mostrar el toast solo si estamos en la página correcta
        if (isAlertStockPage) {
          toast.warn(`⚠️ Bajo stock en: ${newAlerts.map((p) => p.name).join(", ")}`);
        }
      }
    };

    fetchAndValidateStock(); // Ejecutar al recargar la página o cambiar el minStock
  }, [minStock, isAlertStockPage]); // Solo depende de minStock y de si estamos en AlertStockPage

  // Guardar el valor mínimo de stock en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("minStock", minStock);

    // Borra las notificaciones previas y genera nuevas al cambiar el valor mínimo de stock
    const fetchAndValidateStock = async () => {
      const updatedProducts = await fetchProductsFromBackend();
      const lowStockAlerts = updatedProducts.filter(
        (product) => product.quantity < minStock
      );

      // Actualizar las alertas
      setAlerts(lowStockAlerts);

      // Limpiar las notificaciones antiguas
      localStorage.removeItem("notifications");

      // Generar las nuevas notificaciones
      const newNotifications = lowStockAlerts.map((product) => ({
        id: product.id,
        message: `⚠️ Bajo stock en: ${product.name}`,
      }));

      // Guardar las nuevas notificaciones
      localStorage.setItem("notifications", JSON.stringify(newNotifications));

      // Mostrar el toast solo si estamos en la página correcta
      if (isAlertStockPage) {
        toast.warn(`⚠️ Bajo stock en: ${lowStockAlerts.map((p) => p.name).join(", ")}`);
      }
    };

    fetchAndValidateStock(); // Ejecutar al cambiar el minStock
  }, [minStock, isAlertStockPage]); // Solo depende de minStock y de si estamos en AlertStockPage

  return { products, alerts, minStock, setMinStock };
}
