import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { ClientGrid } from "../components/custom/ClientGrid";
import { PaginationDefault } from "../components/custom/Pagination";

const initialClients = [
  { 
    name: "Carlos", 
    email: "carlos@gmail.com", 
    age: 34, 
    address: "123 Main St, Bogotá", 
    recentProducts: ["Jeans Classic", "Chaqueta Denim"] 
  },
  { 
    name: "Luis", 
    email: "luis@gmail.com", 
    age: 42, 
    address: "456 Market St, Medellín", 
    recentProducts: [] 
  },
  { 
    name: "Andrea", 
    email: "andrea@gmail.com", 
    age: 29, 
    address: "789 Sunset Ave, Cúcuta", 
    recentProducts: ["Shorts Cargo"] 
  },
  { 
    name: "Sofia", 
    email: "sofia@gmail.com", 
    age: 31, 
    address: "321 Elm St, Caracas", 
    recentProducts: ["Jeans Slim Fit", "Blusa Casual"] 
  },
  { 
    name: "Fernando", 
    email: "fernando@gmail.com", 
    age: 38, 
    address: "987 Park Rd, Bogotá", 
    recentProducts: [] 
  },
  { 
    name: "Roberto", 
    email: "roberto@gmail.com", 
    age: 45, 
    address: "654 Industrial Rd, Caracas", 
    recentProducts: ["Chaqueta de Cuero"] 
  },
];


const options = ["Orden alfabético"];

export default function InfoClient() {

  return (
    <>
      <AdminTemplate>
        <div>
          <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0 text-slate-700">
            Información clientes
          </h3>
          <div className="flex justify-between gap-2">
            <Input type="text" placeholder="Buscar" className="w-full" />
            <Filter options={options} />
          </div>
          <div className="pt-10">
            <ClientGrid client={initialClients} />
          </div>
          <div className="pt-5">
            <PaginationDefault />
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
