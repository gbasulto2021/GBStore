import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../assets/logo.png";
import IconButton from "@material-ui/core/IconButton";
import {useHistory } from "react-router-dom";
import { Badge, Button, Link } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useStateValue } from "../context/StateProvider";
import { totalBadge } from "../reducers/reducer";
import { auth } from "../firebase";
import {actionTypes} from "../actions/shoppingActions";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "rgb(244,244,244)",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
  },
  cart: {
    color: "#1D7A8C",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
 
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      history.push("/");
    }
  };

  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link href="/">
            <IconButton>
              GBStore
            </IconButton>
          </Link>
          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Hello {user ? user.displayName || user.email : "Guest"}
          </Typography>

          <div className={classes.button}>
          <Link href={!user ? "/signin": undefined}>
              <Button onClick={handleAuth} variant="outlined">
                <strong>{user ? "Sign Out" : "Sign In"}</strong>
              </Button>
            </Link>
            

            <Link href="/checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={totalBadge(basket)} color="secondary">
                  <ShoppingCart fontSize="large" className={classes.cart} />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
