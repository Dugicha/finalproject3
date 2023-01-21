import { useState } from "react";

import { Button, Grid, TextField } from "@mui/material";

import "./ProductFilter.css";

const ProductFilter = ({ maxPrice, minPrice, onChange }) => {
  const [max, setMax] = useState(maxPrice);
  const [min, setMin] = useState(minPrice);

  return (
    <div className="filters">
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            value={max}
            label="Max"
            onChange={(e) => setMax(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            value={min}
            label="Min"
            onChange={(e) => setMin(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onChange(max, min)}
          >
            Filter
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductFilter;
