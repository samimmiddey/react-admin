import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import React from 'react'
import AnalyticsNewsData from '../../data/AnalyticsNewsData';
import { Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AnalyticsNews = () => {
   const newsCards = AnalyticsNewsData.map((item, index) => {
      return (
         <div key={index}>
            <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '16px', padding: '16px 24px', }}>
               <Avatar alt='pic' sx={{ height: '50px', width: '50px', borderRadius: '20%' }} src={item.img} />
               <div style={{ minWidth: '100px', maxWidth: '1000px' }}>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>{item.title}</Typography>
                  <Typography noWrap sx={{ fontSize: '14px', color: 'text.disabled' }}>{item.body}</Typography>
               </div>
            </div>
         </div>
      )
   });

   return (
      <Card elevation={0} sx={{ padding: '16px 0 0 0', marginTop: '24px' }}>
         <CardContent>
            <Typography variant='h6' sx={{ fontWeight: 600 }} >News Update</Typography>
         </CardContent>
         {newsCards}
         <Divider sx={{ marginTop: '5px' }} />
         <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button sx={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>View all <ArrowForwardIcon sx={{ fontSize: '18px' }} /></Button>
         </CardActions>
      </Card>
   )
}

export default AnalyticsNews;