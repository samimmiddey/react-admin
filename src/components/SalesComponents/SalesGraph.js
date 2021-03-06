import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';

const data = [
   {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
   },
   {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
   },
   {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
   },
   {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
   },
   {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
   },
   {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
   },
   {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
   },
];

const SalesGraph = () => {
   const darkMode = useSelector(state => state.ui.darkMode);

   return (
      <Card elevation={0} sx={{ padding: '10px 0 0 0' }}>
         <CardContent>
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Balance Statistics</Typography>
            <Typography variant='h6' sx={{ fontSize: '14px', color: 'text.disabled' }}>(+43% Income | +12% Expense) than last year
            </Typography>
         </CardContent>
         <CardContent sx={{ width: 'inherit', height: '90%', display: 'flex', alignItems: 'center' }}>
            <ResponsiveContainer width="99%" height={300}>
               <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                     bottom: 5,
                     top: 20,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke={darkMode ? '#607d8b' : "#8884d8"} />
                  <YAxis yAxisId="right" orientation="right" stroke={darkMode ? '#546e7a' : "#82ca9d"} />
                  <Tooltip contentStyle={{ color: '#222' }} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="pv" fill={darkMode ? '#546e7a' : "#8884d8"} />
                  <Bar yAxisId="right" dataKey="uv" fill={darkMode ? '#607d8b' : "#82ca9d"} />
               </BarChart>
            </ResponsiveContainer>
         </CardContent>
      </Card >
   );
}

export default SalesGraph;