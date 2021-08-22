import { Button, makeStyles } from "@material-ui/core";
import accounting from "accounting";
import { useStateValue } from "../context/StateProvider.js";
import { getBasketTotal, totalBadge } from "../reducers/reducer.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  button: {
    maxWidth: "200px",
    marginTop: "2rem",
  },
}));

const Total = () => {
  const classes = useStyles();
  const [{ basket }] = useStateValue();
  
  return (
    <div className={classes.root}>
      <h5>Total items : {totalBadge(basket)}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
      
      
      <Button
        component={Link}
        to='/checkout'
        className={classes.button}
        variant='contained'
        color='secondary'
      >
        Check out
      </Button>
    </div>
  );
};

export default Total;
