import React, { useState, useEffect } from 'react';
import HomeCards from '../components/HomeComponents/HomeCards';
import HomeComponents from '../components/HomeComponents/HomeComponents';
import Progress from '../components/UI/Progress';
import useFetch from '../Hooks/use-fetch';
import { useSelector } from 'react-redux';
import CustomModal from '../components/UI/Modal';

const Home = () => {
   const [chartData, setChartData] = useState([]);
   const [tableData, setTableData] = useState([]);
   const showModal = useSelector(state => state.auth.showModal);

   const {
      isLoading: isChartLoading,
      error: isChartError,
      sendRequest: sendChartDataRequest
   } = useFetch();

   const {
      isLoading: isTableLoading,
      error: isTableError,
      sendRequest: sendTableDataRequest
   } = useFetch();

   useEffect(() => {
      const transformChartData = (data) => {
         setChartData(data);
      };

      sendChartDataRequest({ url: 'https://react-app-12cc2-default-rtdb.firebaseio.com/chartData.json' }, transformChartData);
   }, [sendChartDataRequest]);

   useEffect(() => {
      const transformTableData = (data) => {
         setTableData(data);
      };
      sendTableDataRequest({ url: 'https://react-app-12cc2-default-rtdb.firebaseio.com/data.json' }, transformTableData);
   }, [sendTableDataRequest]);

   const isLoading = isChartLoading && isTableLoading;
   const isError = isChartError && isTableError;

   const template = (
      <>
         {showModal && <CustomModal message={'Welcome!'} />}
         <HomeCards />
         <HomeComponents
            chartData={chartData}
            tableData={tableData}
         />
      </>
   );

   return (
      <>
         {isLoading && !isError && <Progress />}
         {!isLoading && !isError && template}
         {isError && <p>Could not fetch data</p>}
      </>
   );
};

export default Home;