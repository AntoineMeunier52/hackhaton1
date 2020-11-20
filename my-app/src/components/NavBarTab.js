import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import logo from "./assets/logoPeaky.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

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
    <div style={{ position: "sticky", top: "0", zIndex: "200" }}>
      <AppBar position="static" color="primary" style={{ height: "65px" }}>
        <Toolbar>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className={classes.logo}
              style={{ height: "60px", width: "70px", position: "sticky" }}
            />
          </Link>
          <div style={{ flex: 7 }}></div>
          <Link to="/manifesto">
            <Button
              color="inherit"
              style={{
                flex: 1,
                margin: "0px 40px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Manifesto
            </Button>
          </Link>
          <Link to="/postulate">
            <Button
              color="inherit"
              style={{
                flex: 1,
                margin: "0px 40px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Postuler
            </Button>
          </Link>
          <Link to="/shopping">
            <IconButton
              edge="start"
              color="secondary"
              style={{ height: "100px", width: "100px", margin: "0px 40px" }}
            >
              <ShoppingBasketIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBarTab;
