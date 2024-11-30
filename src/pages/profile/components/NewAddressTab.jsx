import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";
import { useLocation } from "wouter";
import CountryForm from "../../../components/custom/CountryForm";
import { Button } from "../../../components/ui/button";
import AddressService from "../../../services/api/AddressService";

function NewAddressTab({
  initialData = {
    id: null,
    address_line_1: "",
    city: "",
    postal_code: "",
    country: "",
  },
  type = "new",
}) {
  const queryClient = useQueryClient();

  const [, setLocation] = useLocation();

  const [address, setAddress] = useState(initialData?.address_line_1 || "");
  const [city, setCity] = useState(initialData?.city);
  const [postalCode, setPostalCode] = useState(initialData?.postal_code || "");
  const [country, setCountry] = useState(initialData?.country || "");

  const { mutate: mutateNew, isLoading: isLoadingNew } = useMutation(
    (data) => {
      return AddressService.create({
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
        country: data.country,
      });
    },

    {
      onSuccess: () => {
        queryClient.invalidateQueries("addresses");

        if (type === "new-in-sales") {
          setLocation("/envio");
          return;
        }

        setLocation("/perfil/direcciones");
      },
    }
  );

  const { mutate: mutateUpdate, isLoading: isLoadingUpdate } = useMutation(
    (data) => {
      return AddressService.update({
        id: initialData.id,
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
        country: data.country,
      });
    },

    {
      onSuccess: () => {
        queryClient.invalidateQueries("addresses");

        setLocation("/perfil/direcciones");
      },
    }
  );

  const handleNewAddress = () => {
    if (!address || !city || !postalCode || !country) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    if (type === "update") {
      mutateUpdate({
        address,
        city,
        postalCode,
        country,
      });

      return;
    }

    mutateNew({
      address,
      city,
      postalCode,
      country,
    });
  };

  return (
    <div>
      <div className="w-full">
        <div className="flex flex-col gap-3 pt-3">
          <div>
            <Label>Dirección</Label>
            <Input
              placeholder={"Avenida 3, Barrio ... "}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <CountryForm countryName={country} setCountryName={setCountry} />

          <div className="flex gap-4">
            <div>
              <Label>Ciudad</Label>
              <Input
                placeholder={"Ciudad"}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <Label>Código postal</Label>
              <Input
                placeholder={"Código postal"}
                type="number"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-row justify-end pt-2">
            <Button onClick={handleNewAddress}>
              {type === "new" && (
                <>{isLoadingNew ? "Guardando..." : "Guardar"}</>
              )}

              {type === "update" && (
                <>{isLoadingUpdate ? "Actualizando..." : "Actualizar"}</>
              )}

              {type === "new-in-sales" && (
                <>{isLoadingUpdate ? "Guardando..." : "Siguiente"}</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAddressTab;
