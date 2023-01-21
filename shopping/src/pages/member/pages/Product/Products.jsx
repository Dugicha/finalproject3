import { useEffect, useReducer } from "react";

import { Button, Grid, Pagination } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ProductCard from "./components/productcard/Productcard";
import ProductFilter from "./components/ProductFilter/ProductFilter";
import { fetchProducts } from "./Products.service";
import { productReducer } from "./reducer/Products.reducer";
import {
  SET_FILTER,
  SET_ORDERING,
  SET_PAGE,
  SET_PRODUCTS,
} from "./reducer/Product.constant";
import { initialValue } from "./Products.props";

import "./Products.css";

const totalPages = 5;

const Products = () => {
  const [data, dispatch] = useReducer(productReducer, initialValue);
  const { page, limit, ordering, maxPrice, minPrice, products } = data;

  useEffect(() => {
    getProducts(page, limit, ordering, maxPrice, minPrice);
  }, [page, limit, ordering, maxPrice, minPrice]);

  const getProducts = async (
    nextPage,
    nextLimit,
    nextOrder,
    maxValue,
    minValue
  ) => {
    const data = await fetchProducts(
      nextPage,
      nextLimit,
      nextOrder,
      maxValue,
      minValue
    );

    dispatch({
      type: SET_PRODUCTS,
      payload: data,
    });
  };

  const handlePaginationChange = (event, nextPage) => {
    dispatch({
      type: SET_PAGE,
      payload: nextPage,
    });
  };

  const handleSortProducts = () => {
    const newOrder = ordering === "asc" ? "desc" : "asc";

    dispatch({
      type: SET_ORDERING,
      payload: newOrder,
    });
  };

  const hanldeFilter = (max, min) => {
    dispatch({
      type: SET_FILTER,
      payload: {
        maxPrice: max,
        minPrice: min,
      },
    });
  };

  console.log(products);

  return (
    <div className="products">
      <h1>Products</h1>

      <Grid container spacing={2}>
        <Grid container item md={1} xs={12}>
          Filters
          <ProductFilter maxPrice={0} minPrice={0} onChange={hanldeFilter} />
        </Grid>

        <Grid container item md={9} xs={12} spacing={3}>
          {products?.map((item) => (
            <Grid item key={item.id}>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Grid>

        <Grid container item md={1} xs={12} spacing={1}>
          <Button
            variant="outlined"
            className="sort-button"
            onClick={handleSortProducts}
          >
            Price
            {ordering === "asc" ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </Button>
        </Grid>
      </Grid>

      <Grid container item xs={12} justifyContent="center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePaginationChange}
        />
      </Grid>
    </div>
  );
};

export default Products;
