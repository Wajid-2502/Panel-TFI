import {
  Grid,
  Card,
  CardContent,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Box,
} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import SalesByRegionCard from "./RegionCard";

const data = [
  { name: "V1", value: 387247 },
  { name: "V6", value: 380500 },
  { name: "V3", value: 350955 },
  { name: "V4", value: 307593 },
  { name: "V2", value: 296444 },
  { name: "V5", value: 262781 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

function Charts1() {
  return (
    <Grid container spacing={2} mt={2}>
      {/* First card for Donut Chart with Checkboxes */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Ventas por Vendedor
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <FormControl
                variant="outlined"
                size="small"
                sx={{ width: "30%" }}
              >
                <Select defaultValue="" displayEmpty>
                  <MenuItem value="">Sexo: --- Select ---</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                size="small"
                sx={{ width: "30%" }}
              >
                <Select defaultValue="" displayEmpty>
                  <MenuItem value="">Ubicación: --- Select ---</MenuItem>
                  <MenuItem value="usa">USA</MenuItem>
                  <MenuItem value="peru">Peru</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                size="small"
                sx={{ width: "30%" }}
              >
                <Select defaultValue="" displayEmpty>
                  <MenuItem value="">Contrato: --- Select ---</MenuItem>
                  <MenuItem value="all">All</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ width: "70%" }}>
                <PieChart width={250} height={250}>
                  <Pie
                    data={data}
                    cx={125}
                    cy={125}
                    innerRadius={50}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </Box>
              <Box
                sx={{
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "end",
                }}
              >
                <FormGroup>
                  {data.map((entry, index) => (
                    <FormControlLabel
                      control={<Checkbox checked={true} />}
                      label={entry.name}
                      key={index}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <SalesByRegionCard />
      </Grid>

      <Grid item xs={12} md={4}>
        <SalesByRegionCard />
      </Grid>
    </Grid>
  );
}

export default Charts1;
