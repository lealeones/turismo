import { Container, Grid } from "@mui/material";
import { data } from "../../data/hotel";
import { CardsHotels } from "../../pages/about";
import { useMapContext } from "../context/MapContex";
import filterItems from "./ListadoMapa/filterItems";
import ItemHotel from "./ListadoMapa/ItemHotel";

export const ListMapas = () => {
  const { filter } = useMapContext();
  const items = filterItems({ filter, items: data as CardsHotels[] }).sort(
    (a, b) => a.filters.ranking - b.filters.ranking
  );

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <ItemHotel item={item} key={index} />
        ))}
      </Grid>
    </Container>
  );
};
