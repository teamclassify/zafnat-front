import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { HiDotsVertical } from "react-icons/hi";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../components/ui/dropdown-menu";

import { useQuery } from "react-query";
import { Link } from "wouter";
import { LoadingGrid } from "../../../components/custom/loading";
import AddressService from "../../../services/api/AddressService";
import HeaderTab from "./HeaderTab";
import NewAddressTab from "./NewAddressTab";

function AddressTab() {
  const { data, isLoading, isRefetching } = useQuery("addresses", () =>
    AddressService.getAll()
  );

  const handleDelete = () => {
    console.log("Delete");
  };

  if (isLoading || isRefetching) {
    return <LoadingGrid />;
  }

  return (
    <div>
      <HeaderTab title="Direcciones">
        <Link to="/perfil/direcciones/nueva">
          <Button>Agregar direccion</Button>
        </Link>
      </HeaderTab>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2">
        {data && data?.length > 0 ? (
          data.map((address) => (
            <Card key={address.id}>
              <CardHeader>
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">{address.title}</h3>

                  <Dialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <HiDotsVertical />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          Establecer como predeterminada
                        </DropdownMenuItem>

                        <DialogTrigger asChild>
                          <DropdownMenuItem>Editarx</DropdownMenuItem>
                        </DialogTrigger>

                        <DropdownMenuItem onClick={handleDelete}>
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DialogContent>
                      <DialogHeader>
                        {address && (
                          <NewAddressTab
                            initialData={{
                              id: address.id,
                              address_line_1: address.address_line_1,
                              city: address.city,
                              postal_code: address.postal_code,
                              country: address.country,
                            }}
                            type="update"
                          />
                        )}
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-500">
                  {address.address_line_1}, {address.country}, {address.city}
                </p>
                <p className="text-sm text-gray-500">{address.postal_code}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No hay direcciones registradas</p>
        )}
      </div>
    </div>
  );
}

export default AddressTab;
