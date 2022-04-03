import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SalesCardData from '../../data/SalesCardData';
import { Divider, Grid, IconButton } from '@mui/material';
import SalesCardInnerChart from './SalesCardInnerChart';
import { useSelector } from 'react-redux';

const buttonColors = ['#ffebee', '#fce4ec', '#f3e5f5', '#e1f5fe'];

const SalesCards = () => {
   const darkMode = useSelector(state => state.ui.darkMode);

   const cards = SalesCardData.map((item, index) => {
      return (
         <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={0} sx={{ minWidth: 275 }}>
               <CardContent sx={{ width: 'inherit', height: 'inherit', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '30px' }}>
                  <div>
                     <Typography variant='h6' sx={{ fontSize: '16px', color: 'text.disabled' }} mb={1}>{item.title}</Typography>
                     <Typography variant='h5' sx={{ fontWeight: 600, color: 'text.primary' }}>{item.body}</Typography>
                  </div>
                  <SalesCardInnerChart />
               </CardContent>
               <Divider />
               <CardActions sx={{ padding: '30px' }}>
                  {
                     index === 0 ? <Button size="meidum" color='secondary' sx={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>{item.iconText} {item.icon}</Button> :
                        <div style={{ padding: '3px 0', display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                           <IconButton style={{ display: 'flex', alignItems: 'center', height: '30px', width: '30px', broderRadius: '50%', backgroundColor: `${darkMode ? '#607d8b' : buttonColors[index]}` }}>{item.icon}</IconButton>
                           <Typography variant='h6' sx={{ fontSize: '14px', color: 'text.disabled' }}>{item.iconText}</Typography>
                        </div>
                  }
               </CardActions>
            </Card>
         </Grid >
      )
   });

   return (
      <Grid spacing={2} container mb={3}>
         {cards}
      </Grid>
   );
};

export default SalesCards;