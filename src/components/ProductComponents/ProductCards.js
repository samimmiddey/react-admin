import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, styled } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Rating from '../UI/Rating';
import { Link } from 'react-router-dom';

const CardComponent = styled(Card)({
   transition: "transform 0.15s ease-in-out",
   "&:hover": { transform: "scale3d(1.03, 1.03, 1)" }
});

const ProductCards = (props) => {
   const cards = props.data.map((product, index) => {
      return (
         <Grid key={index} item xs={12} sm={6} md={4} xl={3}>
            <Link to={`/products/${index}`} style={{ textDecoration: 'none' }}>
               <CardComponent sx={{ maxWidth: 500 }} elevation={0} >
                  <CardMedia
                     component="img"
                     alt="green iguana"
                     height="200"
                     image={product.img}
                  />
                  <CardContent sx={{ paddingBottom: '0' }}>
                     <Typography gutterBottom variant="h6" sx={{ color: 'text.secondary', fontSize: '16px', padding: '6px 0' }}>
                        {product.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, reiciendis
                     </Typography>
                  </CardContent>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', columnGap: '10px', padding: '10px 16px' }}>
                     <Rating />
                     <Typography variant='h6' sx={{ fontSize: '14px', color: 'text.disabled' }}>
                        {`(${product.ratingDetails})`}
                     </Typography>
                  </CardContent>
                  <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>{`$${product.price}`}</Typography>
                        <Typography sx={{ color: 'text.disabled', fontSize: '14px', textDecoration: 'line-through' }}>{`$${product.discount}`}</Typography>
                     </div>
                     <Button size="small" variant='contained' sx={{ minHeight: 0, minWidth: 0, padding: '6px 15px' }}><ShoppingCartOutlinedIcon /></Button>
                  </CardContent>
               </CardComponent>
            </Link>
         </Grid>
      );
   });

   return (
      <>
         {cards}
      </>
   );
}

export default ProductCards;
