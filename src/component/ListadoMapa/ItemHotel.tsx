import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { CardsHotels } from "../../../pages/about";
import DetailHotel from "./DetailHotel";

export type ItemHotelProps = {
  item: CardsHotels;
};

const ItemHotel = (prop: ItemHotelProps) => {
  const { item } = prop;

const [isOpen, setIsOpen] = React.useState(false);

const handleClose = () => {
    setIsOpen(!isOpen);
}

  return (
    <Grid item xs={6} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          height={"250px"}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {" " + item.title}
          </Typography>
          <Typography>{item.description}</Typography>
        </CardContent>
        <CardActions>
          
            <Button size="small" onClick={handleClose}>Ver</Button>
          
          <Link href={`https://wa.me/?text=`} target="_blank">
            <Button size="small">Compartir</Button>
          </Link>
          <Chip
            label={
              <Typography>
                <StarIcon sx={{ verticalAlign: "sub" }} /> {item.filters.stars}{" "}
              </Typography>
            }
            sx={{ textJustify: "flex-end", display: "none" }}
          />
        </CardActions>
      </Card>
      <DetailHotel open={isOpen} handleClose={handleClose} item={item}/>
    </Grid>
  );
};
export default ItemHotel;
