import React, { useState } from "react";
// import "../ShoppingCart.css";
import Rating from "@mui/material/Rating";
import { fetchCart } from "../../../../../../services/fetchCart";
import { DeleteFromCart } from "../../../../../../services/DeleteFromCartService";
import { fetchProductsById } from "../../../../../../services/fetchProductsByIdService";
export default function ShoppingProducdItem(props) {
  const {
    id,
    title,
    photos,
    description,
    review,
    setCartProducts,
    price,
    setTotalPrice,
  } = props;

  const deleteFromCart = async () => {
    const response = await fetchCart();

    for (let i = 0; i < response.length; i++) {
      if (response[i].productId === id) {
        await DeleteFromCart(response[i].id);
      }
    }
    let price = 0;
    await fetchProductsById().then((data) => {
      if (data.length >= 0) {
        console.log(data);
        setCartProducts(data);
      }
      for (let i = 0; i < data.length; i++) {
        price += Number(data[i].price);
      }

      setTotalPrice(price.toFixed(2));
    });
  };

  return (
    <div className="cartItem">
      <img src={photos[0]} alt={title} />

      <div className="description">
        <p>
          <b>
            {title} <Rating name="read-only" value={review} readOnly />
          </b>
        </p>
        <p>${price}</p>
        <p className="descriptionText">{description}</p>

        <div className="countHandler">
          <button onClick={deleteFromCart}>Delete</button>
        </div>
      </div>
    </div>
  );
}
