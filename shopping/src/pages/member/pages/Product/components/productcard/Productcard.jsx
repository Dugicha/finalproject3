import * as React from "react";
import Card from "@mui/material/Card";
import { addToCart } from "../../../../../../services/AddToCartService";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Grid } from "@mui/material";

import "./Productcard";

const ProductCard = (props) => {
  const { id, title, category, price, review, photos } = props;

  const addToCartHandler = async () => {
    const productId = id;
    await addToCart(productId);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={photos[0]}
        title={`cover of ${category}`}
      />
      <CardContent>
        <Grid container spacing={1} justifyContent="flex-start">
          <Grid item xs={12}>
            <Typography variant="h6" component="div" align="left">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Rating value={review} precision={0.1} readOnly align="left" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="left">
              ${price}
            </Typography>
          </Grid>
          <button className="addToCartBttn" onClick={addToCartHandler}>
            Add To Cart
          </button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
