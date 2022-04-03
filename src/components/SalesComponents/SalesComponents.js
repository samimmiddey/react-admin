import React from 'react';
import SalesTable from './SalesTable';
import SalesCards from './SalesCards';
import { Button, Card, CardActions, CardContent, Typography, Grid } from '@mui/material';
import AnalyticsReportsSelect from '../UI/AnalyticsReportsSelect';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SalesGraph from './SalesGraph';
import SalesInfo from './SalesInfo';

const SalesComponents = (props) => {
   return (
      <>
         <Card elevation={0} sx={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <CardContent>
               <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Sales</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
               <Button sx={{ minHeight: 0, minWidth: 0, padding: '7px 20px' }} variant='outlined'><BarChartOutlinedIcon /> Reports</Button>
               <AnalyticsReportsSelect />
            </CardActions>
         </Card>
         <SalesCards />
         <Grid spacing={2} container mb={3}>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
               <SalesGraph />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
               <SalesInfo />
            </Grid>
         </Grid>
         <SalesTable tableData={props.tableData} />
      </>
   );
};

export default SalesComponents;