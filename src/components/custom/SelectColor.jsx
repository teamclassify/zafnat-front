import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "react-query";
import ProductsService from "../../services/api/ProductsService";

function SelectColor({ defaultValue, handleSelect }) {
  const { data, isLoading } = useQuery("colors", () =>
    ProductsService.getColors()
  );

  if (isLoading) return "Cargando...";

  return (
    <Select defaultValue={defaultValue} onValueChange={(val) => handleSelect(val)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecciona un color" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Colores</SelectLabel>
          {data?.data?.map((color) => (
            <SelectItem key={color.id} value={color.id}>
              {color.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectColor;
