import { FilterIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Filter({ options, handleSelect }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (filterName) => {
    let newSelectedFilters = [];
    if (selectedFilters.includes(filterName)) {
      newSelectedFilters = selectedFilters.filter((f) => f !== filterName);
    } else {
      newSelectedFilters = [...selectedFilters, filterName];
    }
    setSelectedFilters(newSelectedFilters);
    handleSelect(newSelectedFilters);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <div className="flex gap-2 items-center">
            <FilterIcon className="w-4" />
            Filtrar
            {selectedFilters.length > 0 && `(${selectedFilters.length})`}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {Object.entries(options).map(([groupTitle, groupOptions]) => (
          <div key={groupTitle}>
            <DropdownMenuLabel className="text-sm text-gray-500">
              {groupTitle.charAt(0).toUpperCase() + groupTitle.slice(1)}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {groupOptions.map((option) => (
              <DropdownMenuCheckboxItem
                key={option.name}
                checked={selectedFilters.includes(option.name)}
                onCheckedChange={() => handleCheckboxChange(option.name)}
              >
                {option.name}
              </DropdownMenuCheckboxItem>
            ))}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
