import React from 'react';
import AnalyticsChart from './AnalyticsChart';
import AnalyticsCards from './AnalyticsCards';
import AnalyticsPieChart from './AnalyticsPieChart';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { Card, CardActions, CardContent, Grid, Typography, Button } from '@mui/material';
import AnalyticsReportsSelect from '../UI/AnalyticsReportsSelect';
import AnalyticsNews from './AnalyticsNews';
import AnalyticsOrder from './AnalyticsOrder';

const AnalyticsComponents = (props) => {
   return (
      <>
         <Card elevation={0}
            sx={theme => ({
               marginBottom: '24px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
               }
            })}
         >
            <CardContent>
               <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Analytics</Typography>
            </CardContent>
            <CardActions
               sx={theme => ({
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '20px',
                  [theme.breakpoints.down('375')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     rowGap: '16px',
                     width: '100%'
                  }
               })}
            >
               <Button sx={theme => ({ minHeight: 0, minWidth: 0, padding: '7px 20px', [theme.breakpoints.down('375')]: { width: '100%' } })} variant='outlined'><BarChartOutlinedIcon /> Reports</Button>
               <AnalyticsReportsSelect />
            </CardActions>
         </Card>
         <AnalyticsCards />
         <Grid spacing={2} container>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
               <AnalyticsChart chartData={props.chartData} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
               <AnalyticsPieChart />
            </Grid>
         </Grid>
         <Grid spacing={2} container>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
               <AnalyticsNews />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
               <AnalyticsOrder />
            </Grid>
         </Grid>
      </>
   );
};

export default AnalyticsComponents;