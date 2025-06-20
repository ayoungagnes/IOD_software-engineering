import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Button component={NavLink} to="/" color="inherit">
            Home
          </Button>
          <Button component={NavLink} to="/LoginForm" color="inherit">
            Login
          </Button>
          <Button component={NavLink} to="/BitcoinRates" color="inherit">
            BitcoinRates
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
