import React from 'react';
import { Card, Typography } from '@mui/material';

const FormHeader = (props) => {
   return (
      <Card elevation={0} sx={{ height: '75px', padding: '0 20px', marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
         <Typography variant='h6' color='text.disabled'>
            {props.header}
         </Typography>
      </Card>
   )
}

export default FormHeader