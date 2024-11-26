import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";
import { useLocation } from "wouter";
import CountryForm from "../../../components/custom/CountryForm";
import { Button } from "../../../components/ui/button";
import AddressService from "../../../services/api/AddressService";

function NewAddressTab() {
  const queryClient = useQueryClient();

  const [, setLocation] = useLocation();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const { mutate, isLoading } = useMutation(
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

        setLocation("/perfil/direcciones");
      },
    }
  );

  const handleNewAddress = () => {
    if (!address || !city || !postalCode || !country) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    mutate({
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
              {isLoading ? "Guardando..." : "Guardar"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAddressTab;
