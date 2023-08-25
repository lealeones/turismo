import { Container, Grid } from "@mui/material";
import { data } from "../../data/hotel";
import { CardsHotels } from "../../pages/alojamientos";
//import { CardsHotels } from "../../pages/alojamientos";
import { useMapContext } from "../context/MapContex";
import filterItems from "./ListadoMapa/filterItems";
import ItemHotel from "./ListadoMapa/ItemHotel";
import ItemTrips from "./ListTrips/ItemTrips";
import { useQuery } from "@apollo/client";
import { findTrips } from "../../location/query/findTrips";
import { Key, useState } from "react";
import { Trip } from "../../graphql/graphql";

export const ListTrips = () => {

//   const items = filterItems({ filter, items: data as CardsHotels[] }).sort(
//     (a, b) => a.filters.ranking - b.filters.ranking
//   );


const { data, loading, error } = useQuery(findTrips);
console.log("data", data)
if (loading) return <p>Loading...</p>;



  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={2}>
{data && data.findTrips.map((item: Trip, index: Key | null | undefined) => (
            <ItemTrips item={item} key={index}/>
            
))}
            {/* {items.map((item, index) => (
          <ItemHotel item={item} key={index} />
        ))} */}
      </Grid>
    </Container>
  );
};
