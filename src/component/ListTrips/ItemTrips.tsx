import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Trip } from '../../../graphql/graphql';
import { Grid } from '@mui/material';
import DetailTrip from './DetailTrip';

export type ItemTripsProps = {
    item: Trip
}

export default function ItemTrips(prop: ItemTripsProps) {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleClose = () => {
        setIsOpen(!isOpen);
    }
const {item} = prop;
    const { id, title, startTime, dscr } = prop.item;
    return (
        <Grid>        
            
        <Card sx={{ maxWidth: 345 }} key={id}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {startTime + " " + dscr}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClose}>Ver</Button>
            </CardActions>
        </Card>
        <DetailTrip open={isOpen} handleClose={handleClose} item={item} />
                </Grid>
    );
}