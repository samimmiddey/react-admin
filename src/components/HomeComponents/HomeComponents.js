import React from 'react';
import HomeProgressBar from './HomeProgressBar';
import HomeChart from './HomeChart';
import { Grid } from '@mui/material';
import HomeTable from './HomeTable';

const HomeBars = (props) => {
   return (
      <Grid spacing={2} container mt={2}>
         <Grid item xs={12} sm={12} md={5} xl={4} >
            <HomeProgressBar />
         </Grid>
         <Grid item xs={12} sm={12} md={7} xl={8} >
            <HomeChart data={props.chartData} />
         </Grid>
         <Grid item mt={2} xs={12} sm={12} md={12} xl={12}>
            <HomeTable data={props.tableData} />
         </Grid>
      </Grid>
   );
};

export default HomeBars;