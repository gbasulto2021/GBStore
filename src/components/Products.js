import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Product from "./Product";
import products from "../db/product-data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const Products = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
       
      </Grid>
    </div>
  );
};

export default Products;
