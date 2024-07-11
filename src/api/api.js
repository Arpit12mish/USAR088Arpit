// src/api/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getProducts = async (filters) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
};
