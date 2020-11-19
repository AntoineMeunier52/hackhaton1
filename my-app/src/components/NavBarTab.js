import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Row } from "rsuite";

function NavBarTab() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>logo</div>

          <Button color="inherit">Who we are</Button>
          <Button color="inherit">Partnership</Button>
          <Button color="inherit">Contact us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBarTab;
