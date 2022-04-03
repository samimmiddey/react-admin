import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AnalyticsCardData from '../../data/AnalyticsCardData';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const cardColors = ['#ede7f6', '#e3f2fd', '#e0f7fa', '#e0f2f1'];
const cardColorsDark = ['#512da8', '#1976d2', '#0097a7', '#00796b'];
const buttonColors = ['#d1c4e9', '#bbdefb', '#b2ebf2', '#b2dfdb'];
const buttonColorsDark = ['#7e57c2', '#42a5f5', '#26c6da', '#26a69a'];
const iconColors = ['#9575cd', '#64b5f6', '#4dd0e1', '#4db6ac'];
const iconColorsDark = ['#512da8', '#1976d2', '#0097a7', '#00796b'];

const AnalyticsCards = () => {
   const darkMode = useSelector(state => state.ui.darkMode);

   const cards = AnalyticsCardData.map((item, index) => {
      return (
         <Grid item key={index} xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card variant="outlined" sx={{ padding: '1rem 0', backgroundColor: darkMode ? `${cardColorsDark[index]}` : `${cardColors[index]}` }}>
               <CardContent
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     rowGap: '5px'
                  }}
               >
                  <Button variant='text' sx={{ backgroundColor: darkMode ? `${buttonColorsDark[index]}` : `${buttonColors[index]}`, color: darkMode ? `${iconColorsDark[index]}` : `${iconColors[index]}`, marginBottom: '1.25rem', minHeight: '60px', minWidth: '60px', borderRadius: '50%' }}>
                     {item.icon}
                  </Button>
                  <Typography variant='h4' sx={{ fontWeight: 600, color: 'text.primary' }}>{item.amount}</Typography>
                  <Typography sx={{ color: 'text.disabled' }}>{item.details}</Typography>
               </CardContent>
            </Card>
         </Grid>
      );
   })
   return (
      <>
         <Grid spacing={2} container sx={{ marginBottom: '24px' }}>
            {cards}
         </Grid>
      </>
   )
}

export default AnalyticsCards;