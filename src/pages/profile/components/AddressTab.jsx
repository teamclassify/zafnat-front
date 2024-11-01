import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { HiDotsVertical } from "react-icons/hi";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../components/ui/dropdown-menu";

import HeaderTab from "./HeaderTab";

function AddressTab() {
  const handleNewAddress = () => {
    console.log("New address");
  };

  return (
    <div>
      <HeaderTab title="Direcciones">
        <Button onClick={handleNewAddress}>Agregar direccion</Button>
      </HeaderTab>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Casa</h3>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <HiDotsVertical />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem>
                    Establecer como predeterminada
                  </DropdownMenuItem>
                  <DropdownMenuItem>Editar</DropdownMenuItem>
                  <DropdownMenuItem>Eliminar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-500">
              Calle 123, Colonia Centro, CDMX
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AddressTab;
