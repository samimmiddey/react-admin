import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'react-circular-progressbar/dist/styles.css'
import { styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';

const data01 = [
   { name: 'Group A', value: 400 },
   { name: 'Group B', value: 300 },
   { name: 'Group C', value: 300 },
   { name: 'Group D', value: 200 },
];
const data02 = [
   { name: 'A1', value: 100 },
   { name: 'A2', value: 300 },
   { name: 'B1', value: 100 },
   { name: 'B2', value: 80 },
   { name: 'B3', value: 40 },
   { name: 'B4', value: 30 },
   { name: 'B5', value: 50 },
   { name: 'C1', value: 100 },
   { name: 'C2', value: 200 },
   { name: 'D1', value: 150 },
   { name: 'D2', value: 50 },
];

const MainBody = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   rowGap: '12px',
   marginTop: '8px'
});

const ActionCard = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   rowGap: '16px',
   marginTop: '20px',
});

const ResponsiveCard = styled(CardContent)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
   },
}));

const HomeProgressBar = () => {
   const darkMode = useSelector(state => state.ui.darkMode);

   return (
      <Card elevation={0} sx={{ padding: '10px 0', overflow: 'auto' }}>
         <CardContent>
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Total Revenue</Typography>
         </CardContent>
         <CardContent sx={{ height: '100%', display: 'flex', justifyContent: 'center', width: '100%', padding: '16px 0' }}>
            <ResponsiveContainer width="99%" height={250}>
               <PieChart width='100%' height='100%'>
                  <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill={darkMode ? '#546e7a' : "#8884d8"} />
                  <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill={darkMode ? '#607d8b' : "#82ca9d"} label />
               </PieChart>
            </ResponsiveContainer>
         </CardContent>
         <MainBody>
            <Typography color='text.disabled' variant='h6' sx={{ fontSize: '20px' }}>
               Total sales made today
            </Typography>
            <Typography color='text.primary' variant='h4'>
               $420
            </Typography>
            <Typography color='text.disabled' variant='h6' sx={{ fontSize: '16px', textAlign: 'center' }}>
               Previous Transactions are still processing. Last payments may or may not be included.
            </Typography>
         </MainBody>
         <ResponsiveCard sx={{
            display: 'flex',
            justifyContent: 'space-between'
         }}>
            <ActionCard>
               <Typography variant='h6' sx={{ fontSize: '16px' }} color='text.disabled'>Target</Typography>
               <Button size="small" variant='outlined'><ExpandMoreIcon /> $12.4k</Button>
            </ActionCard>
            <ActionCard>
               <Typography variant='h6' sx={{ fontSize: '16px' }} color='text.disabled'>Last Week</Typography>
               <Button size="small" variant='outlined'><ExpandMoreIcon /> $12.4k</Button>
            </ActionCard>
            <ActionCard>
               <Typography variant='h6' sx={{ fontSize: '16px' }} color='text.disabled'>Last Month</Typography>
               <Button size="small" variant='outlined'><ExpandMoreIcon /> $12.4k</Button>
            </ActionCard>
         </ResponsiveCard>
      </Card>
   );
}

export default HomeProgressBar;
