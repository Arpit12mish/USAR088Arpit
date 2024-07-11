// src/components/Filter.js
import React from 'react';
import { TextField, MenuItem, Button, Grid } from '@mui/material';

const Filter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Category"
          name="category"
          value={filters.category}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Laptop">Laptop</MenuItem>
          <MenuItem value="PC">PC</MenuItem>
          {/* Add more categories as needed */}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Company"
          name="company"
          value={filters.company}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="AMZ">Amazon</MenuItem>
          <MenuItem value="FLP">Flipkart</MenuItem>
          <MenuItem value="SNP">Snapdeal</MenuItem>
          {/* Add more companies as needed */}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Rating"
          name="rating"
          type="number"
          value={filters.rating}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Min Price"
          name="minPrice"
          type="number"
          value={filters.minPrice}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Max Price"
          name="maxPrice"
          type="number"
          value={filters.maxPrice}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={() => setFilters(filters)}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
