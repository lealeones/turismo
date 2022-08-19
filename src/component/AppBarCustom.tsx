
import { AppBar, Toolbar, Typography, useScrollTrigger, useTheme } from '@mui/material'
import React from 'react'

 const AppBarCustom = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  const theme = useTheme()
  return (
    <AppBar position="fixed" sx={!trigger ? {backgroundColor:theme.palette.primary.main, height:"100px"} :{backgroundColor:"rgba(6, 12, 34, 0.8)",transition:"all 0.5s",height:"100px"}}>
    <Toolbar>
      <img src='https://parana.tur.ar/Mentor/assets/img/logos/logo-negro.png' alt="Logo" style={{marginTop:"15px"}} />
      <Typography variant="h6" color="inherit" noWrap sx={{marginLeft: "5rem"}}>
       Formularios
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
export default AppBarCustom