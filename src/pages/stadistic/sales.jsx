import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import Graphic from "./components/graphic";
import { graphicDataSales } from "../../hooks/useDataGraphic";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SalesStadistic() {
  const value = ["ingresos", "ventas", "pedidos"];
  const [timeRange, setTimeRange] = useState("90d");

  const monthMapping = {
    Enero: 0,
    Febrero: 1,
    Marzo: 2,
    Abril: 3,
    Mayo: 4,
    Junio: 5,
    Julio: 6,
    Agosto: 7,
    Septiembre: 8,
    Octubre: 9,
    Noviembre: 10,
    Diciembre: 11,
  };

  const filterDataByTimeRange = (data) => {
    const referenceDate = new Date();
    let monthsToSubtract = 3;

    switch (timeRange) {
      case "90d":
        monthsToSubtract = 3;
        break;
      case "30d":
        monthsToSubtract = 1;
        break;
      case "6m":
        monthsToSubtract = 5;
        break;
      case "1y":
        monthsToSubtract = 12;
        break;
      case "5y":
        monthsToSubtract = 60;
        break;
      case "all":
        return data;
      default:
        monthsToSubtract = 3;
    }

    const startDate = new Date(
      referenceDate.getFullYear(),
      referenceDate.getMonth() - monthsToSubtract
    );

    return data.filter((item) => {
      const itemMonthIndex = monthMapping[item.month];
      const itemDate = new Date(referenceDate.getFullYear(), itemMonthIndex, 1);
      return itemDate >= startDate;
    });
  };

  return (
    <AdminTemplate>
      <Title title="Estadísticas de ventas" />
      <div className="mb-5">
        <div className="flex justify-end mb-4">
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
        </div>
        <Graphic
          title={graphicDataSales[0].title}
          data={filterDataByTimeRange(graphicDataSales[0].data)}
          total={graphicDataSales[0].total}
          value={value[0]}
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        {graphicDataSales.slice(1).map((graphic, index) => (
          <Graphic
            key={index}
            title={graphic.title}
            data={filterDataByTimeRange(graphic.data)}
            total={graphic.total}
            value={value[index + 1]}
          />
        ))}
      </div>
    </AdminTemplate>
  );
}
