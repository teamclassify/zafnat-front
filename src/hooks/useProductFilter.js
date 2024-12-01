import { useState } from "react";

export const optionsProductAdmin = {
  stock: [
    { name: "Mayor stock", value: "highStock" },
    { name: "Menor stock", value: "lowStock" },
  ],
  categorias: [
    { name: "Shorts", value: "short" },
    { name: "Pantalones", value: "pantalon" },
    { name: "Clásicos", value: "clasico" },
  ],
};

export function useProductFilter() {
  const [filters, setFilters] = useState({
    stock: null,
    categorias: [],
  });

  const handleProductSelect = (selectedFilters) => {
    const newFilters = { ...filters };

    // Handle stock filter
    const stockFilter = optionsProductAdmin.stock.find(option => selectedFilters.includes(option.name));
    newFilters.stock = stockFilter || null;

    // Handle category filters
    newFilters.categorias = optionsProductAdmin.categorias
      .filter(option => selectedFilters.includes(option.name))
      .map(option => option.value);

    setFilters(newFilters);
  };

  const applyFilter = (products) => {
    let filteredProducts = [...products];

    // Apply stock filter
    if (filters.stock) {
      filteredProducts.sort((a, b) => {
        const aStock = a.skus.reduce((sum, sku) => sum + sku.quantity, 0);
        const bStock = b.skus.reduce((sum, sku) => sum + sku.quantity, 0);
        return filters.stock.value === "highStock" ? bStock - aStock : aStock - bStock;
      });
    }

    // Apply category filters
    if (filters.categorias.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.categorias.some(category => 
          product.category.name.toLowerCase().includes(category)
        )
      );
    }
    return filteredProducts;
  };

  return { options: optionsProductAdmin, handleProductSelect, applyFilter };
}

