import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Popover,
  Typography,
} from "@mui/material";
import { CardsHotels } from "../../../pages/about";

export type DetailHotelProps = {
  open: boolean;
  handleClose: () => void;
  item: CardsHotels;
};

const DetailHotel = (props: DetailHotelProps) => {
  const { open, handleClose, item } = props;

  return (
    <Popover
      id={"popover-filter"}
      open={open}
      //anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
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
          <Button size="small" onClick={handleClose}>
            Ver
          </Button>

          <Link href={`https://wa.me/?text=`} target="_blank">
            <Button size="small">Compartir</Button>
          </Link>
        </CardActions>
      </Card>
    </Popover>
  );
};
export default DetailHotel;
