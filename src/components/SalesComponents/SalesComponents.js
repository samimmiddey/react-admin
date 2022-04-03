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
               <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Sales</Typography>
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