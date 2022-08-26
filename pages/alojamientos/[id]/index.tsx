import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import AppBarCustom from '../../../src/component/AppBarCustom'
import { data } from '../../../data/hotel'
import { CardsHotels } from '..'
import ShareComponent from '../../../src/component/utils/ShareComponent'

const PostAlojamientos = () => {
  const router = useRouter()

  const { id } = router.query
  const hoteles: CardsHotels[] = data

  const hotel: CardsHotels | undefined = hoteles.find((hotel) => (hotel.id.toLowerCase() === (id ? id.toString().toLowerCase() : 'DEFAULT')))

  if (!hotel) { return <div>Hotel no encontrado</div> }

  return (
    <>
      <AppBarCustom />
      <Container maxWidth="xl" sx={{ marginTop: "10rem" }}>
        <Grid container spacing={4} justifyContent="center"
          alignItems="center" >
          <Grid
            xs={8}
            md={8}
            item
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
                height={"450px"}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {" " + hotel.title}
                </Typography>
                <Typography>{hotel.description}</Typography>
              
              </CardContent>
              <CardActions>
                <Button size="small" >
                  Ver
                </Button>

                <Link href={`https://wa.me/?text=`} target="_blank">
                  <Button size="small">Compartir</Button>
                </Link>
              </CardActions>
              <ShareComponent />
            </Card>

          </Grid>
          {/* SIDERBAR */}
          <Grid
            xs={4}
            md={4}
            item
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "-webkit-center" }}

          >
            <Card
              sx={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>

                <iframe style={{ border: "none", borderRadius: "4px", alignItems: "center", width: "auto" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8759507996256!2d-60.5386616842612!3d-31.719283418143267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b4528a925517a3%3A0xd48c4357adb13107!2sMaran%20Suites%20%26%20Towers!5e0!3m2!1ses!2sar!4v1661464431198!5m2!1ses!2sar" width="auto" height="400" loading="lazy" ></iframe>
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>




    </>
  )
}

export default PostAlojamientos