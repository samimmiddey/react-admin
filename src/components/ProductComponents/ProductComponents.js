import React from 'react';
import { Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import ProductCards from './ProductCards';
import { Card, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import SuccessSnackbar from '../UI/Snackbar';

const Container = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   columnGap: '20px',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      rowGap: '16px',
   }
}));

const CardContainer = styled(Card)(({ theme }) => ({
   minHeight: '75px',
   padding: '0 20px',
   marginBottom: '30px',
   display: 'flex',
   [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      rowGap: '16px',
      padding: '20px 20px'
   },
   [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
      alignItems: 'center',
   },
}));

const ProductComponents = (props) => {
   const showSnackbar = useSelector(state => state.ui.showSuccess);
   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));
   return (
      <>
         {showSnackbar && <SuccessSnackbar />}
         <CardContainer elevation={0} >
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Products</Typography>
            <Container>
               <TextField
                  label="Search Products"
                  variant="outlined"
                  size='small'
                  sx={{ width: { xs: '100%', sm: 'inherit' }, flexGrow: 1 }}
               />
               <Link to='products/newproduct'
                  style={{ textDecoration: 'none', flexGrow: 1, width: `${smWidth ? '100%' : ''}` }}
               >
                  <Button sx={{ minHeight: 0, minWidth: 0, padding: '6.5px 16px', width: { xs: '100%', md: 'inherit' } }} variant='outlined'>Add New Product</Button>
               </Link>
            </Container>
         </CardContainer>
         <Grid container spacing={3}>
            <ProductCards data={props.data} />
         </Grid>
      </>
   )
}

export default ProductComponents