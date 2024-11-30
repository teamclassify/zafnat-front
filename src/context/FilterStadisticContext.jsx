import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export default function FilterStadisticContext({ children }) {
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
    <FilterContext.Provider value={{ timeRange, setTimeRange, filterDataByTimeRange }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
