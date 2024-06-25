import "./App.css";
import TopAppBar from "./components/AppBar";
import { Container, CssBaseline } from "@mui/material";
import Cards from "./components/Cards";
import Charts1 from "./components/Charts1";
import Charts2 from "./components/Charts2";
import Charts3 from "./components/Charts3";
import DailySalesChart from "./components/Charts4";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <TopAppBar />
      <Container
        maxWidth={false}
        sx={{ paddingLeft: "16px", paddingRight: "16px" }}
      >
        <Cards />
        <Charts1 />
        <Charts2 />
        <Charts3 />
        <DailySalesChart />
      </Container>
    </div>
  );
}

export default App;
