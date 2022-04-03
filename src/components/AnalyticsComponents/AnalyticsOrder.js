import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Card, CardContent, Divider, Typography } from '@mui/material';

const AnalyticsOrder = () => {
   return (
      <Card elevation={0} sx={{ marginTop: '24px', padding: '16px 0 0 0' }}>
         <CardContent>
            <Typography variant='h6' sx={{ fontWeight: 600 }} >Order Timeline</Typography>
         </CardContent>
         <CardContent sx={{ display: 'flex', flexDirection: 'column', rowGap: '18px', padding: '16px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '16px' }}>
               <CircleIcon sx={{ fontSize: '16px', color: 'skyblue' }} />
               <div>
                  <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>1983 orders, $4220</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'text.disabled' }}>02 Apr 2022 12:07 PM</Typography>
               </div>
            </div>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '16px' }}>
               <CircleIcon sx={{ fontSize: '16px', color: 'lightgreen' }} />
               <div>
                  <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>12 invoices have been paid</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'text.disabled' }}>01 Apr 2022 11:07 AM</Typography>
               </div>
            </div>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '16px' }}>
               <CircleIcon sx={{ fontSize: '16px', color: 'violet' }} />
               <div>
                  <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>Order #37745 from September</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'text.disabled' }}>12 Mar 2022 11:44 PM</Typography>
               </div>
            </div>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '16px' }}>
               <CircleIcon sx={{ fontSize: '16px', color: 'yellow' }} />
               <div>
                  <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>New order placed #XF-2356</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'text.disabled' }}>22 Jan 2022 09:34 PM</Typography>
               </div>
            </div>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '16px' }}>
               <CircleIcon sx={{ fontSize: '16px', color: 'red' }} />
               <div>
                  <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>New order placed #XF-2346</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'text.disabled' }}>12 Mar 2022 11:44 PM</Typography>
               </div>
            </div>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '16px' }}>
               <CircleIcon sx={{ fontSize: '16px', color: 'coral' }} />
               <div>
                  <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>New order placed #XF-2346</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'text.disabled' }}>02 Apr 2022 12:07 PM</Typography>
               </div>
            </div>
         </CardContent>
      </Card>
   )
}

export default AnalyticsOrder