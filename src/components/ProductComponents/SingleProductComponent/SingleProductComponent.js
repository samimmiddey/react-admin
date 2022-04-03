import { Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Rating from '../../UI/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/system';
import SelectBox from '../../UI/SelectBox';
import { Divider } from '@mui/material';
import Quantity from '../../UI/Quantity';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Grid } from '@mui/material';
import ProductCardTabs from '../../UI/ProductCardTabs';
import { useSelector } from 'react-redux';

const ActionButton = styled(Button)({
   minHeight: 0,
   minWidth: 0,
   padding: '10px 15px',
   width: '100%'
});

const CardContainer = styled(Paper)({
   maxWidth: '100%',
   backGroundColor: 'blue'
});

const CardElement = styled(CardContent)({
   padding: '10px 16px'
});

const ResponsiveCard = styled(CardContent)(({ theme }) => ({
   padding: '10px 16px',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      rowGap: '5px',
      alignItems: 'flex-start'
   }
}));

const ResponsiveDiv = styled(CardContent)(({ theme }) => ({
   padding: '10px 16px',
   [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      rowGap: '8px',
      alignItems: 'flex-start'
   }
}));

const ResponsiveActions = styled(CardActions)(({ theme }) => ({
   [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '10px',
      alignItems: 'flex-end'
   }
}));

const SingleProductComponent = (props) => {
   const darkMode = useSelector(state => state.ui.darkMode);
   const { productID } = useParams();

   if (props.data.length <= 0) {
      return null;
   } else {
      const id = props.data.find((item, index) => index === +productID);
      if (!id) {
         return (
            <Redirect to='/products' />
         )
      }
   }

   return (
      <CardContainer elevation={0} sx={{ border: `1px solid ${darkMode ? '#455a64' : '#eee'}` }}>
         <Card elevation={0} sx={{ maxWidth: '90%', margin: '24px auto', padding: '16px' }}>
            <Grid container>
               <Grid item xs={12} sm={12} md={12} xl={6}>
                  <CardElement sx={{ height: '100%' }}>
                     <img style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '5px' }} src={props.data[+productID].img} alt="" />
                  </CardElement>
               </Grid>
               <Grid item xs={12} sm={12} md={12} xl={6}>
                  <div>
                     <CardElement>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                           <Button sx={{ fontSize: '10px', backgroundColor: darkMode ? '#455a64' : '#e8f5e9', color: '#66bb6a', marginBottom: '10px' }}>In Stock</Button>
                           <Button sx={{ backgroundColor: darkMode ? '#455a64' : '#eceff1', color: '#78909c', marginBottom: '10px', minHeight: 0, minWidth: 0, padding: '8px 10px' }}><FavoriteBorderOutlinedIcon /></Button>
                        </div>
                        <Typography gutterBottom variant="h6" sx={{ fontWeight: 600 }}>
                           {props.data[+productID].name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, reiciendis
                        </Typography>
                     </CardElement>
                     <CardElement sx={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                        <Rating />
                        <Typography sx={{ color: 'text.disabled', fontSize: '14px' }}>
                           {props.data[+productID].ratingDetails}
                        </Typography>
                     </CardElement>
                     <ResponsiveCard sx={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                        <Typography variant='h5' color='primary.light' sx={{ fontWeight: '700' }}>
                           ${props.data[+productID].price}
                        </Typography>
                        <Typography variant='h6' sx={{ color: 'text.disabled', fontSize: '16px', textDecoration: 'line-through' }}>
                           ${props.data[+productID].discount}
                        </Typography>
                        <Typography variant='h6' sx={{ color: 'text.disabled', fontSize: '12px' }}>
                           (Inclusive all of all taxes)
                        </Typography>
                     </ResponsiveCard>
                     <Divider sx={{ marginTop: '10px' }} />
                     <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px', margin: '30px 0' }}>
                        <ResponsiveDiv sx={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                           <Typography variant='h6' sx={{ fontSize: '16px', color: 'text.secondary' }}>Size</Typography>
                           <SelectBox />
                        </ResponsiveDiv>
                        <ResponsiveDiv sx={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                           <Typography variant='h6' sx={{ fontSize: '16px', color: 'text.secondary' }}>Quantity</Typography>
                           <Quantity />
                        </ResponsiveDiv>
                     </div>
                     <Divider sx={{ marginBottom: '10px' }} />
                     <ResponsiveActions>
                        <ActionButton variant='contained'><ShoppingCartOutlinedIcon sx={{ marginRight: '10px' }} /> Add To Cart</ActionButton>
                        <ActionButton variant='contained' color='secondary'>Buy Now</ActionButton>
                     </ResponsiveActions>
                  </div>
               </Grid>
            </Grid>
            <ProductCardTabs />
         </Card>
      </CardContainer>
   );
};

export default SingleProductComponent;