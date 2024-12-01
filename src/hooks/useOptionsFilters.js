// Facturas
export const optionsInvoices = {
  fecha: [{ name: "Fecha reciente" }, { name: "Más antiguo" }],
  compra: [{ name: "Mayor compra" }, { name: "Menor compra" }],
  estado: [{ name: "Pagado" }, { name: "No Pago" }],
};

// Órdenes
export const optionsOrders = {
  fecha: [{ name: "Fecha reciente" }, { name: "Más antiguo" }],
  compra: [{ name: "Mayor compra" }, { name: "Menor compra" }],
  estado: [{ name: "Entregado" }, { name: "Empaquetado" }, { name: "Enviado" }],
};

// Mayoristas
export const optionsWholeSale = {
  fecha: [{ name: "Fecha reciente" }, { name: "Más antiguo" }],
  compra: [{ name: "Mayor compra" }, { name: "Menor compra" }],
};

// Categorías
export const optionsCategory = {
  genero: [{ name: "Hombres" }, { name: "Mujeres" }],
  estado: [{ name: "Habilitado" }, { name: "Deshabilitado" }],
};

//Productos vista Admin
export const optionsProductAdmin = {
  stock: [
    { name: "Mayor stock", value: "highStock" },
    { name: "Menor stock", value: "lowStock" },
  ],
  categorias: [
    { name: "Shorts", value: "shorts" },
    { name: "Pantalones", value: "pants" },
    { name: "Chaquetas", value: "jackets" },
  ],
};
