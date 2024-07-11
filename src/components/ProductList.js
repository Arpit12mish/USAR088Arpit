// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { getProducts } from '../api/api';
import Filter from './Filter';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    minPrice: 0,
    maxPrice: 10000,
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    const data = await getProducts(filters);
    setProducts(data);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Top Products</Typography>
      <Filter filters={filters} setFilters={setFilters} />
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">Company: {product.company}</Typography>
                <Typography variant="body2">Category: {product.category}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
                <Typography variant="body2">Rating: {product.rating}</Typography>
                <Typography variant="body2">Discount: {product.discount}%</Typography>
                <Typography variant="body2">Availability: {product.availability}</Typography>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
