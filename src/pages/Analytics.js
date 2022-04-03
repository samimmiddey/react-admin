import React, { useState, useEffect } from 'react';
import AnalyticsComponents from '../components/AnalyticsComponents/AnalyticsComponents';
import Progress from '../components/UI/Progress';
import useFetch from '../Hooks/use-fetch';

const Analytics = () => {
   const [analyticsChartData, setAnalyticsChartData] = useState([]);

   const {
      isLoading: isAnalyticsChartLoaidng,
      error: isAnalyticsChartError,
      sendRequest: sendAnalyticsChartRequest
   } = useFetch();

   useEffect(() => {
      const transformAnalyticsChartData = (data) => {
         const loadedChartData = [];
         for (const key in data) {
            loadedChartData.push({
               name: data[key].name,
               uv: data[key].uv,
               pv: data[key].pv,
               amt: data[key].amt,
               cnt: data[key].cnt,
            });
         }
         setAnalyticsChartData(data);
      }

      sendAnalyticsChartRequest({ url: 'https://react-app-12cc2-default-rtdb.firebaseio.com/analyticsChartData.json' }, transformAnalyticsChartData);
   }, [sendAnalyticsChartRequest]);

   const isLoading = isAnalyticsChartLoaidng;
   const isError = isAnalyticsChartError;

   const component = (
      <AnalyticsComponents
         chartData={analyticsChartData}
      />
   );

   return (
      <>
         {isLoading && <Progress />}
         {!isLoading && component}
         {isError && <p>Could not fetch data!</p>}
      </>
   );
};

export default Analytics;