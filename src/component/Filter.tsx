import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Grid, Popover, TextField, useTheme } from "@mui/material";
import { useMapContext } from "../context/MapContex";

export enum tipoHotel {
  todos = "Todos",
  hoteles = "Hoteles",
  aparts = "Aparts",
  hostels = "Hostels",
  hosterias = "Hosterias",
  bungalows = "Bungalows",
  cabañas = "Cabañas",
}

export type FilterComponentProps = {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
};

const Filter = (props: FilterComponentProps) => {
    const theme = useTheme();
  const { open, anchorEl, handleClose } = props;
  const { filter, setBusquedaString, setTipo } = useMapContext();

  const handleChangeTipo = (event: SelectChangeEvent) => {
    setTipo(event.target.value as string);
  };

  const handleChangeString = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusquedaString(event.target.value);
  };

  const tipo = Object.values(tipoHotel);

  return (
    <Popover
      id={"popover-filter"}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      
    >
      <Grid container direction={"column"} sx={{ backgroundColor: "none"}}>
        <Grid item>
          <FormControl fullWidth>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Buscar"
                variant="outlined"
                value={filter.busquedaString}
                onChange={handleChangeString}
              />
            </Box>
          </FormControl>
        </Grid>
        <Grid item>
          <Box sx={{ m: 1, minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter.tipo}
                label="Tipo"
                onChange={handleChangeTipo}
                fullWidth
              >
                {tipo.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Popover>
  );
};
export default Filter;
