import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterContext } from "../../../context/FilterStadisticContext";


export default function FilterDate() {
  const { timeRange, setTimeRange } = useFilterContext();

  return (
    <Select value={timeRange} onValueChange={setTimeRange}>
      <SelectTrigger
        className="w-[160px] rounded-lg sm:ml-auto"
        aria-label="Select a value"
      >
        <SelectValue placeholder="Últimos 3 meses" />
      </SelectTrigger>
      <SelectContent className="rounded-xl">
        <SelectItem value="all" className="rounded-lg">
          Todos los registros
        </SelectItem>
        <SelectItem value="5y" className="rounded-lg">
          Últimos 5 años
        </SelectItem>
        <SelectItem value="1y" className="rounded-lg">
          Último año
        </SelectItem>
        <SelectItem value="6m" className="rounded-lg">
          Últimos 6 meses
        </SelectItem>
        <SelectItem value="90d" className="rounded-lg">
          Últimos 3 meses
        </SelectItem>
        <SelectItem value="30d" className="rounded-lg">
          Últimos 30 días
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
