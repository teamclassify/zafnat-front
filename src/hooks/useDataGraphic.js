export const graphicData = [
  {
    title: "Productos vendidos",
    data: [
      { month: "Enero", productos: 120 },
      { month: "Febrero", productos: 150 },
      { month: "Marzo", productos: 200 },
      { month: "Abril", productos: 180 },
      { month: "Mayo", productos: 220 },
      { month: "Junio", productos: 260 },
      { month: "Julio", productos: 300 },
      { month: "Agosto", productos: 310 },
      { month: "Septiembre", productos: 280 },
      { month: "Octubre", productos: 240 },
      { month: "Noviembre", productos: 350 },
      { month: "Diciembre", productos: 400 },
    ],
    totalProducts: 3010,
  },
  {
    title: "Productos agregados a lista de deseos",
    data: [
      { month: "Enero", productos: 50 },
      { month: "Febrero", productos: 80 },
      { month: "Marzo", productos: 120 },
      { month: "Abril", productos: 100 },
      { month: "Mayo", productos: 130 },
      { month: "Junio", productos: 90 },
      { month: "Julio", productos: 110 },
      { month: "Agosto", productos: 150 },
      { month: "Septiembre", productos: 140 },
      { month: "Octubre", productos: 170 },
      { month: "Noviembre", productos: 190 },
      { month: "Diciembre", productos: 200 },
    ],
    totalProducts: 1530,
  },
];

export const graphicDataClient = [
  {
    title: "Clientes totales",
    data: [
      { month: "Enero", clientes: 50 },
      { month: "Febrero", clientes: 80 },
      { month: "Marzo", clientes: 20 },
      { month: "Abril", clientes: 30 },
      { month: "Mayo", clientes: 10 },
      { month: "Junio", clientes: 43 },
      { month: "Julio", clientes: 14 },
      { month: "Agosto", clientes: 29 },
      { month: "Septiembre", clientes: 61 },
      { month: "Octubre", clientes: 52 },
      { month: "Noviembre", clientes: 47 },
      { month: "Diciembre", clientes: 86 },
    ],
    totalClient: 510,
  },
];

export const graphicDataSales = [
  {
    title: "Ingresos totales",
    data: [
      { month: "Enero", ingresos: 15000000 },
      { month: "Febrero", ingresos: 18000000 },
      { month: "Marzo", ingresos: 20000000 },
      { month: "Abril", ingresos: 17500000 },
      { month: "Mayo", ingresos: 22000000 },
      { month: "Junio", ingresos: 24000000 },
      { month: "Julio", ingresos: 21000000 },
      { month: "Agosto", ingresos: 19000000 },
      { month: "Septiembre", ingresos: 23000000 },
      { month: "Octubre", ingresos: 21500000 },
      { month: "Noviembre", ingresos: 27000000 },
      { month: "Diciembre", ingresos: 30000000 },
    ],
    total: new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(260000000),
  },
  {
    title: "Ventas totales",
    data: [
      { month: "Enero", ventas: 120 },
      { month: "Febrero", ventas: 150 },
      { month: "Marzo", ventas: 200 },
      { month: "Abril", ventas: 180 },
      { month: "Mayo", ventas: 230 },
      { month: "Junio", ventas: 250 },
      { month: "Julio", ventas: 210 },
      { month: "Agosto", ventas: 190 },
      { month: "Septiembre", ventas: 240 },
      { month: "Octubre", ventas: 220 },
      { month: "Noviembre", ventas: 260 },
      { month: "Diciembre", ventas: 300 },
    ],
    total: 2550,
  },
  {
    title: "Pedidos totales",
    data: [
      { month: "Enero", pedidos: 60 },
      { month: "Febrero", pedidos: 75 },
      { month: "Marzo", pedidos: 90 },
      { month: "Abril", pedidos: 85 },
      { month: "Mayo", pedidos: 100 },
      { month: "Junio", pedidos: 110 },
      { month: "Julio", pedidos: 95 },
      { month: "Agosto", pedidos: 88 },
      { month: "Septiembre", pedidos: 105 },
      { month: "Octubre", pedidos: 97 },
      { month: "Noviembre", pedidos: 115 },
      { month: "Diciembre", pedidos: 125 },
    ],
    total: 1150,
  },
];

export const cardData = [
  { title: "Productos mejores valorados", progress: false },
  { title: "Productos con mayores ganancias", progress: true },
  { title: "Productos más vendidos", progress: true },
  { title: "Productos menos vendidos", progress: true },
  { title: "Categorías con más ventas", progress: true },
  { title: "Categorías con menos ventas", progress: true },
];

export const cardDataClient = [
  { title: "Clientes con más compras", progress: true },
  { title: "Clientes con más pedidos", progress: true },
];
