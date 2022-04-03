import React from 'react';
import UserList from './UserList';
import { Grid } from '@mui/material';

const UserComponent = (props) => {
   return (
      <Grid container >
         <Grid item xs={12} sm={12} md={12} xl={12}>
            <UserList rows={props.rows} />
         </Grid>
      </Grid>
   );
};

export default UserComponent;