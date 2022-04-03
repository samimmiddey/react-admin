import React, { useState, useEffect } from 'react';
import SingleProductComponent from '../components/ProductComponents/SingleProductComponent/SingleProductComponent';
import Progress from '../components/UI/Progress';
import useFetch from '../Hooks/use-fetch';

const SingleProduct = () => {
   const [productData, setProductData] = useState([]);
   const { isLoading, error, sendRequest } = useFetch();

   useEffect(() => {
      const transformData = (data) => {
         const loadedData = [];
         for (const key in data) {
            loadedData.push({
               img: data[key].img,
               name: data[key].name,
               ratingDetails: data[key].ratingDetails,
               price: data[key].price,
               discount: data[key].discount
            });
         }
         setProductData(loadedData);
      }

      sendRequest({ url: 'https://react-app-12cc2-default-rtdb.firebaseio.com/productCardData.json' }, transformData);
   }, [sendRequest]);

   return (
      <>
         {isLoading && <Progress />}
         {!isLoading && <SingleProductComponent data={productData} />}
         {error && <p>Could not fetch data</p>}
      </>
   );
};

export default SingleProduct;