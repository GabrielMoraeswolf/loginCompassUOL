import axios from 'axios';
import { useEffect, useState } from 'react';
/*
const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})

export default api;
*/


/*
axios.get('https://fakestoreapi.com/products/')
  .then(response => {
    const products: Array<any> = response.data; 
    const extractedData = products.map((product: any) => { 
      const { id, title, price, description, category, image, rating } = product;
      const { rate, count } = rating;
      return { id, title, price, description, category, image, rate, count };
    });
    console.log(extractedData);
  })
  .catch(error => {
    console.error(error);
  });
  */

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchProducts;
