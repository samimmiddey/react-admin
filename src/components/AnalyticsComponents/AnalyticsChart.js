import React from 'react';
import {
   ComposedChart,
   Line,
   Area,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   Scatter,
   ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Analytics = (props) => {
   const darkMode = useSelector(state => state.ui.darkMode);

   return (
      <Card elevation={0} sx={{ padding: '10px 0 0 0', height: '100%' }}>
         <CardContent>
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Website Visits</Typography>
            <Typography variant='h6' sx={{ fontSize: '14px', color: 'text.disabled' }}>(+43%) than last year
            </Typography>
         </CardContent>
         <CardContent sx={{ width: 'inherit', height: '90%', display: 'flex', alignItems: 'center' }}>
            <ResponsiveContainer width="99%" height={400}>
               <ComposedChart
                  width={500}
                  height={400}
                  data={props.chartData}
                  margin={{
                     top: 30,
                     bottom: 10,
                  }}
               >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="name" scale="band" />
                  <YAxis />
                  <Tooltip contentStyle={{color: '#222'}} />
                  <Legend />
                  <Area type="monotone" dataKey="amt" fill={darkMode ? '#607d8b' : "#8884d8"} stroke={darkMode ? '#607d8b' : "#8884d8"} />
                  <Bar dataKey="pv" barSize={20} fill={darkMode ? '#78909c' : "#413ea0"} />
                  <Line type="monotone" dataKey="uv" stroke={darkMode ? '#78909c' : "#8884d8"} />
                  <Scatter dataKey="cnt" fill={darkMode ? '#455a64' : "#ff7300"} />
               </ComposedChart>
            </ResponsiveContainer>
         </CardContent>
      </Card>
   );
}

export default Analytics;