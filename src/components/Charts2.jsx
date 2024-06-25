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
  Checkbox,
  FormControlLabel,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Paper,
} from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto"; // Required to make chart.js work with react-chartjs-2

const SalesByZone = () => {
  const [seller, setSeller] = useState("");
  const [sex, setSex] = useState("");
  const [date, setDate] = useState("");
  const [locations, setLocations] = useState({
    deer: true,
    Peru: true,
  });

  const handleSellerChange = (event) => setSeller(event.target.value);
  const handleSexChange = (event) => setSex(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleLocationChange = (event) => {
    setLocations({
      ...locations,
      [event.target.name]: event.target.checked,
    });
  };

  const data = {
    labels: ["Deer", "Peru"],
    datasets: [
      {
        data: [71.3, 28.7],
        backgroundColor: ["#42a5f5", "#66bb6a"],
        borderWidth: 0,
        cutout: "70%",
        rotation: 270,
        circumference: 180,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Card raised sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Sales by Zone
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
            <InputLabel id="seller-select-label">Seller</InputLabel>
            <Select
              labelId="seller-select-label"
              id="seller-select"
              value={seller}
              label="Seller"
              onChange={handleSellerChange}
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
            <InputLabel id="sex-select-label">Sex</InputLabel>
            <Select
              labelId="sex-select-label"
              id="sex-select"
              value={sex}
              label="Sex"
              onChange={handleSexChange}
            >
              <MenuItem value="Select">Select</MenuItem>
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
            <InputLabel id="date-select-label">Date</InputLabel>
            <Select
              labelId="date-select-label"
              id="date-select"
              value={date}
              label="Date"
              onChange={handleDateChange}
            >
              <MenuItem value="Select">Select</MenuItem>
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="This Week">This Week</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography>Show more filters</Typography>
          <button>Click to select</button>
        </Box>
        <Box sx={{ height: 200 }}>
          <Doughnut data={data} options={options} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={locations.deer}
                onChange={handleLocationChange}
                name="deer"
              />
            }
            label="Location"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={locations.Peru}
                onChange={handleLocationChange}
                name="Peru"
              />
            }
            label="Peru"
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>deer</Typography>
            <Typography>$1,415,146</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Peru</Typography>
            <Typography>$570,374</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const SellerActivities = () => {
  const rows = [
    {
      seller: "V1",
      visits: 16,
      quotes: 19,
      sales: 38,
      totalSales: "$387,247",
      avgPerSale: "$10,191",
    },
    {
      seller: "V2",
      visits: 21,
      quotes: 14,
      sales: 35,
      totalSales: "$296,444",
      avgPerSale: "$8,470",
    },
    {
      seller: "V3",
      visits: 18,
      quotes: 17,
      sales: 34,
      totalSales: "$350,955",
      avgPerSale: "$10,322",
    },
    {
      seller: "V4",
      visits: 27,
      quotes: 13,
      sales: 29,
      totalSales: "$307,593",
      avgPerSale: "$10,607",
    },
    {
      seller: "V5",
      visits: 17,
      quotes: 10,
      sales: 25,
      totalSales: "$262,781",
      avgPerSale: "$10,511",
    },
    {
      seller: "V6",
      visits: 20,
      quotes: 17,
      sales: 37,
      totalSales: "$380,500",
      avgPerSale: "$10,284",
    },
  ];

  return (
    <Card raised sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Seller Activities
        </Typography>
        <Typography variant="body2">
          Number of Visits, Quotes and Sales. It also shows the total of your
          sales and the average invoiced in $
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
            marginTop: 2,
          }}
        >
          <FormControl
            fullWidth
            margin="dense"
            size="small"
            sx={{ width: "30%" }}
          >
            <InputLabel id="date-select-label">Date</InputLabel>
            <Select
              labelId="date-select-label"
              id="date-select"
              value=""
              label="Date"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="This Week">This Week</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            margin="dense"
            size="small"
            sx={{ width: "30%" }}
          >
            <InputLabel id="location-select-label">Location</InputLabel>
            <Select
              labelId="location-select-label"
              id="location-select"
              value=""
              label="Location"
            >
              <MenuItem value="Select">Select</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Peru">Peru</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Seller</TableCell>
                <TableCell align="right">Cant. Visits</TableCell>
                <TableCell align="right">Quantity Quotes</TableCell>
                <TableCell align="right">Sales Qty</TableCell>
                <TableCell align="right">Total sales</TableCell>
                <TableCell align="right">Average per sale</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.seller}</TableCell>
                  <TableCell align="right">{row.visits}</TableCell>
                  <TableCell align="right">{row.quotes}</TableCell>
                  <TableCell align="right">{row.sales}</TableCell>
                  <TableCell align="right">{row.totalSales}</TableCell>
                  <TableCell align="right">{row.avgPerSale}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

const Charts2 = () => {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} sm={6}>
        <SalesByZone />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SellerActivities />
      </Grid>
    </Grid>
  );
};

export default Charts2;
