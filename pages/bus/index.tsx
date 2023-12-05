import { Popover } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import AppBarCustom from "../../src/component/AppBarCustom";
import Copyright from "../../src/component/Copyright";
import Filter from "../../src/component/Filter";
import { ListMapas } from "../../src/component/ListMapas";
import { MapContextProvider, useMapContext } from "../../src/context/MapContex";
import { ListTrips } from "../../src/component/ListTrips";
import PaymentComponent from "../../src/component/paymentComponent";

export type FiltersHotels = {
    stars: number;
    ranking: number;
};

export type ContactHotels = {
    telWsp: string;
    tel: string;
    email: string;
    web: string;
    linkFb: string;
    linkIg: string;
    coord: number[];
};

export type CardsHotels = {
    title: string;
    id: string;
    description: string;
    image: React.ReactNode;
    tipe: string;
    url: string;
    mediaVideo: string;
    filters: FiltersHotels;
    contact: ContactHotels;
};

const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(6, 12, 34, 0.5)",
        },
    },
});

export default function HomeBus() {
    //* States
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );
    const [payment, setPayment] = React.useState<boolean>(false)
    //* Handlers
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePayment = () => {
        setPayment(!payment)
    }

    const open = Boolean(anchorEl);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBarCustom />
            <MapContextProvider>
                <Grid sx={{ height: "67vh", backgroundImage: "url(https://parana.tur.ar/writable/uploads/dfa6b25872db144f9e87c6b74721727c.png)", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                    <div

                    />

                    <Box
                        sx={{
                            //bgcolor: "background.paper",
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container sx={{ marginTop: "10rem" }}>
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="white"
                            >
                                Bus Turistico
                            </Typography>
                            <Typography
                                variant="h5"
                                align="center"
                                color="white"
                                paragraph
                            >
                                Salidas para este fin de semana
                            </Typography>
                            <Button variant="contained" onClick={handlePayment} >
                                Pagar
                            </Button>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="flex-end"
                            >
                                <Button variant="outlined" onClick={handleClick} sx={{ color: "white" }}>
                                    Filtros
                                </Button>
                                <Filter
                                    anchorEl={anchorEl}
                                    open={open}
                                    handleClose={handleClose}
                                />
                            </Stack>
                        </Container>
                    </Box>
                </Grid>

                <ListTrips />


            </MapContextProvider>
            {payment && (<PaymentComponent open={payment} handleClose={handlePayment} />)}
            {/* Footer */}
            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    EMPATUR
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                ></Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}
