import React, { useState, useEffect } from 'react';
import SalesComponents from '../components/SalesComponents/SalesComponents';
import Progress from '../components/UI/Progress';

const Sales = () => {
   const [loadedData, setLoadedData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      const fetchHandler = async () => {
         setIsLoading(true);
         const response = await fetch('https://react-app-12cc2-default-rtdb.firebaseio.com/data.json');

         if (!response.ok) {
            throw new Error('Could not fetch data!');
         }
         const data = await response.json();

         const fetchedData = [];
         for (const key in data) {
            fetchedData.push({
               id: data[key].id,
               product: data[key].product,
               amount: data[key].amount,
               method: data[key].method,
               status: data[key].status
            });
         }

         setLoadedData(fetchedData);
         setIsLoading(false);
      }

      fetchHandler()
         .catch(error => {
            console.log(error.message);
         });
   }, []);
   return (
      <>
         {isLoading && <Progress />}
         {!isLoading && <SalesComponents tableData={loadedData} />}
      </>
   );
};

export default Sales;