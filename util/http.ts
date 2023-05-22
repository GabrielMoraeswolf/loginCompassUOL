import axios from 'axios';

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
