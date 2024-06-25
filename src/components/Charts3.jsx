import React from "react";
import { Card, CardContent, Typography, Box } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Grid } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts3 = () => {
  const data1 = {
    labels: ["V1", "V2", "V3", "V4", "V5", "V6"],
    datasets: [
      {
        label: "Total Sales",
        data: [287247, 295444, 350955, 307553, 325781, 380500],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const data2 = {
    labels: ["USA", "Perú"],
    datasets: [
      {
        label: "V1",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: [570374],
      },
      {
        label: "V2",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: [845772],
      },
      {
        label: "V3",
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        data: [0],
      },
      {
        label: "V4",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        data: [0],
      },
      {
        label: "V5",
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        data: [0],
      },
      {
        label: "V6",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        data: [0],
      },
    ],
  };

  const options1 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const options2 = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Grid container display="flex" spacing={2} mt={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Sales View 1
            </Typography>
            <Bar data={data1} options={options1} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Sales View 2
            </Typography>
            <Bar data={data2} options={options2} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Charts3;
