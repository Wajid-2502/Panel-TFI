import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCard = styled(Card)(({ theme, color, textcolor }) => ({
  backgroundColor: color,
  color: textcolor || theme.palette.getContrastText(color),
  height: "100%",
}));

const Cards = () => {
  const data = [
    {
      title: "Number of Sellers",
      value: 6,
      color: "#00bcd4",
    },
    {
      title: "Number of Zones",
      value: 2,
      color: "#2196f2",
    },
    {
      title: "Total Area Sales",
      value: "$1,985,520",
      color: "#ff9800",
    },
    {
      title: "Total Sales Seller",
      value: "$1,985,520",
      color: "#4caf50",
    },
    {
      title: "Difference Sales last days",
      value: "76%",
      subValue: "31 Mar 2022: $86,938\n30 Mar 2022: $49,523",
      color: "#f44336",
    },
    {
      title: "Average Portfolio Turnover",
      value: "0.62",
      details: "Max (V4): 0.95\nMin (V5): 0.38",
      color: "#ffc107",
    },
    {
      title: "Sales Quantity",
      value: 198,
      details: "Max (V1): 38\nMin (V5): 25",
      color: "#00bcd0",
    },
  ];

  return (
    <Grid container spacing={2} mt={1}>
      <Grid item xs={12} sm={4} md={4}>
        <Card raised sx={{ height: "100%", backgroundColor: "#fff" }}>
          <CardContent sx={{ height: "100px" }}>
            <Box display={"flex"} justifyContent={"center"}>
              <Typography
                variant="h4"
                component="h2"
                color="textSecondary"
                style={{ fontWeight: "bold", color: "#00bcd0" }}
              >
                Tellme
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                color="textSecondary"
                style={{ fontWeight: "bold", color: "#f44336" }}
              >
                Form
              </Typography>
            </Box>
            <Typography
              textAlign={"center"}
              variant="body1"
              color="textSecondary"
              style={{ fontSize: "20px", color: "black", marginLeft: "10px" }}
            >
              Data Show Service
            </Typography>

            <Box display={"flex"} ml={"10%"} mt={8}>
              <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                style={{ fontWeight: 650, color: "#f44336" }}
              >
                PANEL TFI
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                style={{ fontWeight: 600, color: "black", marginLeft: 3 }}
              >
                DEMO
              </Typography>
            </Box>
            <Typography variant="h6" ml={"13%"}>
              <strong>Olivares SA commercial</strong> area
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={8} md={8}>
        <Grid container spacing={2}>
          {data.slice(0, 4).map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CustomCard color={item.color} textcolor="white" raised>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h2"
                    color={"white"}
                    textAlign={"center"}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="h4" component="p" textAlign={"center"}>
                    {item.value}
                  </Typography>
                  {item.details && (
                    <Typography variant="body2" textAlign={"center"}>
                      {item.details.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Typography>
                  )}
                  {item.subValue && (
                    <Typography variant="body2" textAlign={"center"}>
                      {item.subValue}
                    </Typography>
                  )}
                </CardContent>
              </CustomCard>
            </Grid>
          ))}
          {data.slice(4).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomCard color={item.color} textcolor={"white"} raised>
                <CardContent>
                  <Typography variant="h6" component="h2" textAlign={"center"}>
                    {item.title}
                  </Typography>
                  <Typography variant="h4" component="p" textAlign={"center"}>
                    {item.value}
                  </Typography>
                  {item.details && (
                    <Typography variant="body2" textAlign={"center"}>
                      {item.details.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Typography>
                  )}
                  {item.subValue && (
                    <Typography variant="body2" textAlign={"center"}>
                      {item.subValue}
                    </Typography>
                  )}
                </CardContent>
              </CustomCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cards;
