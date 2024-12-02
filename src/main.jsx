import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { CatalogProvider } from "./context/CatalogContext.jsx";
import FilterProvider from "./context/FilterStadisticContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import UserProvider from "./context/UserContext";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ProductProvider>
          <CatalogProvider>
            <FilterProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FilterProvider>
          </CatalogProvider>
        </ProductProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
);
