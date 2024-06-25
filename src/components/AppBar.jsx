import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";

const TopAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ background: "white", color: "black", fontWeight: 900 }}>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Panel TFI DEMO INTEGRACIÓN
        </Typography>
        <Button color="inherit">
          <IosShareIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
