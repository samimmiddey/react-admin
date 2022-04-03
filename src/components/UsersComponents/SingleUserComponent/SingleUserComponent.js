import { Grid } from '@mui/material';
import React from 'react';
import SingleUserCard from './SingleUserCard';
import SingleUserTable from './SingleUserTable';

const SingleUserComponent = (props) => {
   return (
      <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SingleUserCard userData={props.userData} />
         </Grid>
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SingleUserTable tableData={props.tableData} />
         </Grid>
      </Grid>
   );
};

export default SingleUserComponent;