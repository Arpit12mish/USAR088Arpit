// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { getProductById } from '../api/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
  };

  return (
    product ? (
      <Card>
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body2">Company: {product.company}</Typography>
          <Typography variant="body2">Category: {product.category}</Typography>
          <Typography variant="body2">Price: ${product.price}</Typography>
          <Typography variant="body2">Rating: {product.rating}</Typography>
          <Typography variant="body2">Discount: {product.discount}%</Typography>
          <Typography variant="body2">Availability: {product.availability}</Typography>
        </CardContent>
      </Card>
    ) : (
      <Typography variant="h6">Loading...</Typography>
    )
  );
};

export default ProductDetail;
