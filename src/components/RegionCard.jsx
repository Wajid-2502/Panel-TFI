import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Box,
  InputLabel,
  IconButton,
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "auto",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function SalesByRegionCard() {
  const [vendor, setVendor] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  const handleVendorChange = (event) => {
    setVendor(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <Card raised sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Ventas por Zona y Vendedor
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <FormControl
            fullWidth
            margin="dense"
            size="small"
            sx={{ width: "30%" }}
          >
            <InputLabel id="vendor-select-label">Vendedor</InputLabel>
            <Select
              labelId="vendor-select-label"
              id="vendor-select"
              value={vendor}
              label="Vendedor"
              onChange={handleVendorChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="V1">V1</MenuItem>
              <MenuItem value="V2">V2</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            margin="dense"
            size="small"
            sx={{ width: "30%" }}
          >
            <InputLabel id="gender-select-label">Sexo</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={gender}
              label="Sexo"
              onChange={handleGenderChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            margin="dense"
            size="small"
            sx={{ width: "30%" }}
          >
            <InputLabel id="date-select-label">Fecha</InputLabel>
            <Select
              labelId="date-select-label"
              id="date-select"
              value={date}
              label="Fecha"
              onChange={handleDateChange}
            >
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="This Week">This Week</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ position: "relative" }}>
          <LoadScript googleMapsApiKey="AIzaSyCfTsH0FOWJwIAV265u6fkzRzdfYAAl5qY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              <Marker position={center} />
              {/* Add more markers as needed */}
            </GoogleMap>
          </LoadScript>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              p: 1,
              backgroundColor: "rgba(255,255,255,0.8)",
            }}
          >
            $387,247
          </Box>
          <Box sx={{ position: "absolute", top: 16, right: 16 }}>
            <IconButton size="small">
              <ZoomInIcon />
            </IconButton>
            <IconButton size="small">
              <ZoomOutIcon />
            </IconButton>
            <IconButton size="small">
              <MyLocationIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SalesByRegionCard;
