import { useState } from "react";

export function useAccordionFilter({ handleFilter }) {
  const [, setFilterSelect] = useState({});

  const handleSelect = (name, categoryName) =>
    setFilterSelect((prevFilterSelect) => {
      const categoryItems = prevFilterSelect[categoryName]
        ? prevFilterSelect[categoryName]
        : [];
      const isItemSelected = categoryItems.includes(name);

      const updatedCategoryItems = isItemSelected
        ? categoryItems.filter((item) => item !== name)
        : [...categoryItems, name];

      const updatedFilterSelect = {
        ...prevFilterSelect,
        [categoryName]: updatedCategoryItems,
      };

      handleFilter(updatedFilterSelect);
      return updatedFilterSelect;
    });

  return { handleSelect };
}
