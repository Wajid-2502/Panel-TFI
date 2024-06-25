import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";

// Represents one seller's timeline
const SellerTimeline = ({ seller, events }) => {
  // Assume each month has a fixed width
  const monthWidth = 150;
  return (
    <Box position="relative" mb={1}>
      <Typography variant="subtitle2">{seller}</Typography>
      <Box position="relative" height="20px" bgcolor="#ddd" borderRadius="4px">
        {events.map((event, index) => (
          <Box
            key={index}
            position="absolute"
            left={`${(event.day * monthWidth) / 31}px`} // Calculate position based on day of the month
            top="50%"
            style={{ transform: "translateY(-50%)" }}
            width="30px"
            height="30px"
            bgcolor={event.color}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            border="2px solid #fff"
          >
            <Typography variant="caption" style={{ color: "#fff" }}>
              {event.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const DailySalesChart = () => {
  const sellers = {
    V1: [
      { day: 1, value: 2, color: "red" },
      { day: 15, value: 3, color: "red" },
    ],
    V2: [
      { day: 2, value: 3, color: "blue" },
      { day: 28, value: 4, color: "blue" },
    ],
    // More sellers and events here
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Daily Sales per Seller
        </Typography>
        {Object.keys(sellers).map((seller, index) => (
          <SellerTimeline
            key={index}
            seller={seller}
            events={sellers[seller]}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default DailySalesChart;
