import { Card, CardContent, CardActions, Typography, Button, Divider } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const data = [
   { name: 'Group A', value: 400 },
   { name: 'Group B', value: 300 },
   { name: 'Group C', value: 300 },
   { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const continents = ['America', 'Asia', 'Europe', 'Africa'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
         {`${(percent * 100).toFixed(0)}%`}
      </text>
   );
};

const AnalyticsPieChart = () => {
   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Card elevation={0} sx={{ padding: '10px 0 0 0', height: '100%' }}>
         <CardContent sx={{ height: '10%' }}>
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Current Visits</Typography>
         </CardContent>
         <CardContent sx={{ width: 'inherit', height: '80%', display: 'flex', alignItems: 'center' }}>
            <ResponsiveContainer width="99%" height={400}>
               <PieChart width={400} height={400}>
                  <Pie
                     data={data}
                     cx="50%"
                     cy="50%"
                     labelLine={false}
                     label={renderCustomizedLabel}
                     outerRadius={`${smWidth ? 80 : 125}`}
                     fill="#8884d8"
                     dataKey="value"
                  >
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                  </Pie>
               </PieChart>
            </ResponsiveContainer>
         </CardContent>
         <Divider />
         <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10%' }}>
            {continents.map((continent, index) => {
               return (
                  <Button key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: '5px' }}>
                     <div style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: `${COLORS[index]}` }} />
                     {continent}
                  </Button>
               );
            })}
         </CardActions>
      </Card>
   );
}

export default AnalyticsPieChart;
