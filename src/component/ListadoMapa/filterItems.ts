import { CardsHotels } from "../../../pages/about";
import { filterMaps } from "../../context/MapContex";

export type ItemsFilterProps = {
  filter: filterMaps;
  items: CardsHotels[];
};

const filterItems = (props: ItemsFilterProps) => {
  const { filter, items } = props;

  let result: CardsHotels[] = items;

  if (filter.busquedaString) {
    result = result.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(filter.busquedaString.toLowerCase());
    });
  }

  if (filter.tipo !== "Todos" && filter.tipo !== "") {
    result = result.filter((item) => {
      return item.tipe.toLowerCase() === filter.tipo.toLowerCase();
    });
  }
  return result;
};

export default filterItems;
