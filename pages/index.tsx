import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { getLocation } from '../location/query/getLocation';
import AppBarCustom from '../src/component/AppBarCustom';
import Copyright from '../src/component/Copyright';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';




const cards: CardsForms[] = [
  {
    title: "Alojamientos",
    description: "A travez de este formulario usted puede publicar su alojamiento",
    url: "https://forms.gle/mASwMbVVNRtNdbcD6"
  },
  {
    title: "Agenda",
    description: "A travez de este formulario usted puede publicar su evento",
    url: "www.parana.tur.ar"
  }
];



const stringForInvitation = (card: CardsForms) => {
  return ("Te comparto este formulario de " + card.title + " para poder iniciar tu gestión. " + card.url
  )
}
const urlWeb = "https://www.parana.tur.ar"

export type CardsForms = {
  title: string,
  url: string,
  description: string,
}

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(6, 12, 34, 0.5)"

    }
  }
});


const Home = () => {
  const { data, loading, error } = useQuery(getLocation, { variables: { data: 1 } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(  {JSON.stringify(error)}  </p>;



  const handlePay = async () => {
    const urlBackend = `${process.env.NEXT_PUBLIC_BACKEND_APP}/payment/new`
    const postData = {
      name: "Nombre del producto",
      price: 19.99,
      unit: 1,
      img: "url_de_la_imagen.jpg"
    };
    const response = await axios.post(urlBackend, postData)
    if (response.data?.url) {
      window.open(response.data.url, "_blank")
    }
    console.log("boton apretado", response)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarCustom />
      <Grid sx={{ marginTop: "10rem" }}>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Formularios
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Estos formularios estan dedicados a recopilar informacion para la actualizacion de la pagina web
            </Typography>
            <Link href={urlWeb} variant="h4" underline="none" sx={{ justifyContent: "center", display: "flex", }} >
              www.parana.tur.ar
            </Link>

            <Grid container item xs={12} sx={{
              pt: 20, pb: 50
            }}>
              {/* asdasdasd */}

              <Grid item xs={6} >

                <Button variant="contained" endIcon={<SendIcon />} onClick={handlePay} >
                  Pagar
                </Button>

              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" align="center" color="text.secondary" >
                  -     Boton para pagar
                </Typography>

              </Grid>

            </Grid>


            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">amy</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={4}>
            {cards.map((item, index) => (
              <Grid item key={index} xs={12} sm={12} md={12}>
                <Card
                  sx={{ display: 'flex' }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                    sx={{ height: "100px", width: "70px" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Formulario  {' ' + item.title}
                    </Typography>
                    <Typography>
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={item.url} target="_blank" >
                      <Button size="small">Ver</Button>
                    </Link>
                    <Link href={`https://wa.me/?text=${encodeURIComponent(stringForInvitation(item))}`} target="_blank" >
                      <Button size="small">Compartir</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          EMPATUR
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >

        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Home