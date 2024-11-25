import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.jsx";
import { CatalogProvider } from "./context/CatalogContext.jsx";
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
            <App />
          </CatalogProvider>
        </ProductProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
);
