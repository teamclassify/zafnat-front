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

function SelectSize({ defaultValue, handleSelect }) {
  const { data, isLoading } = useQuery("sizes", () =>
    ProductsService.getSizes()
  );

  if (isLoading) return "Cargando...";

  return (
    <Select defaultValue={defaultValue} onValueChange={(val) => handleSelect(val)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecciona un tamaño" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tamaños</SelectLabel>
          {data?.data?.map((size) => (
            <SelectItem key={size.id} value={size.id}>
              {size.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectSize;
