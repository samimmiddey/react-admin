import React, { useState, useRef } from 'react';
import { Box, Grid } from '@mui/material';
import { TextField, Button, Card, styled } from '@mui/material';
import img from '../../../assets/product.svg';
import FormHeader from '../../UI/FormHeader';
import CircularProgress from "@mui/material/CircularProgress";

const InputBox = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   rowGap: '16px'
});

const regEx = {
   name: /^[A-Z][a-z]{2,20}$/,
   image: /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#%?=~_|!:,.;]*[-A-Z0-9+&@#%=~_|])/ig,
   price: /^[0-9.]{2,10}$/,
   discount: /^[0-9.$]{2,10}$/,
   rating: /^[0-9+.]{2,10}$/,
};

const isEmpty = value => value.trim() === '';

const NewProductComponent = (props) => {
   const [loading, setLoading] = useState(false);
   const [emptyField, setEmptyField] =
      useState({
         name: false,
         image: false,
         price: false,
         discount: false,
         rating: false
      });

   const [regexValidity, setRegexValidity] =
      useState({
         name: true,
         image: true,
         price: true,
         discount: true,
         rating: true
      });

   const nameRef = useRef();
   const imageRef = useRef();
   const priceRef = useRef();
   const discountRef = useRef();
   const ratingRef = useRef();

   const formSubmitHandler = e => {
      e.preventDefault();

      const enteredName = nameRef.current.value;
      const enteredImage = imageRef.current.value;
      const enteredPrice = priceRef.current.value;
      const enteredDiscount = discountRef.current.value;
      const enteredRating = ratingRef.current.value;

      const nameEmptyCheck = isEmpty(enteredName);
      const imageEmptyCheck = isEmpty(enteredImage);
      const priceEmptyCheck = isEmpty(enteredPrice);
      const discountEmptyCheck = isEmpty(enteredDiscount);
      const ratingEmptyCheck = isEmpty(enteredRating);

      const nameValidityCheck = regEx.name.test(enteredName);
      const imageValidityCheck = regEx.image.test(enteredImage);
      const priceValidityCheck = regEx.price.test(enteredPrice);
      const discountValidityCheck = regEx.discount.test(+enteredDiscount);
      const ratingValidityCheck = regEx.rating.test(enteredRating);

      setEmptyField({
         name: nameEmptyCheck,
         image: imageEmptyCheck,
         price: priceEmptyCheck,
         discount: discountEmptyCheck,
         rating: ratingEmptyCheck
      });

      setRegexValidity({
         name: nameValidityCheck,
         image: imageValidityCheck,
         price: priceValidityCheck,
         discount: discountValidityCheck,
         rating: ratingValidityCheck
      });

      if (
         nameEmptyCheck || !nameValidityCheck ||
         imageEmptyCheck || !imageValidityCheck ||
         priceEmptyCheck || !priceValidityCheck ||
         discountEmptyCheck || !discountValidityCheck ||
         ratingEmptyCheck || !ratingValidityCheck
      ) {
         return;
      }

      setLoading(true);

      props.onSubmit({
         name: enteredName,
         img: enteredImage,
         price: enteredPrice,
         discount: enteredDiscount,
         rating: enteredRating
      });
   }

   const errorName = emptyField.name ? true : false;
   const errorImage = emptyField.image ? true : false;
   const errorPrice = emptyField.price ? true : false;
   const errorDiscount = emptyField.discount ? true : false;
   const errorRating = emptyField.rating ? true : false;

   return (
      <>
         <FormHeader header='Add New Product' />
         <Card elevation={0} sx={{ maxWidth: {xl: '90%'}, margin: '24px auto', padding: '16px' }}>
            <Grid spacing={3} container>
               <Grid item xs={12} sm={12} md={6} xl={6} >
                  <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={img} alt=""></img>
               </Grid>
               <Grid item xs={12} sm={12} md={6} xl={6}>
                  <Box
                     component='form'
                     noValidate
                     autoComplete="off"
                     onSubmit={formSubmitHandler}
                  >
                     <InputBox>
                        <TextField
                           error={errorName || !regexValidity.name}
                           inputRef={nameRef}
                           required
                           label={errorName || !regexValidity.name ? 'Error' : 'Name'}
                           id="outlined-error-helper-text"
                           helperText={!errorName && !regexValidity.name ? 'Incorrect Entry' : ''}
                           placeholder='Name'
                        />
                        <TextField
                           error={errorImage || !regexValidity.image}
                           inputRef={imageRef}
                           required
                           label={errorImage || !regexValidity.image ? 'Error' : 'Image'}
                           helperText={!errorImage && !regexValidity.image ? 'Incorrect Entry' : ''}
                           placeholder='Image'
                        />
                        <TextField
                           error={errorPrice || !regexValidity.price}
                           inputRef={priceRef}
                           required
                           label={errorPrice || !regexValidity.price ? 'Error' : 'Price'}
                           helperText={!errorPrice && !regexValidity.price ? 'Incorrect Entry' : ''}
                           placeholder='Price'
                           type='number'
                        />
                        <TextField
                           error={errorDiscount || !regexValidity.discount}
                           inputRef={discountRef}
                           required
                           label={errorDiscount || !regexValidity.discount ? 'Error' : 'Discount'}
                           helperText={!errorDiscount && !regexValidity.discount ? 'Incorrect Entry' : ''}
                           placeholder='Discount'
                           type='number'
                        />
                        <TextField
                           error={errorRating || !regexValidity.rating}
                           inputRef={ratingRef}
                           label={errorRating || !regexValidity.rating ? 'Error' : 'Rating'}
                           helperText={!errorRating && !regexValidity.rating ? 'Incorrect Entry' : ''}
                           placeholder='Rating'
                        />
                     </InputBox>
                     <Button
                        sx={{
                           mt: 3,
                           width: '100%',
                           minWidth: 0,
                           minHeight: 0,
                           height: '46px',
                           position: 'relative'
                        }}
                        disabled={loading ? true : false}
                        variant='contained'
                        type='submit'>
                        <CircularProgress
                           variant={loading ? 'indeterminate' : 'determinate'}
                           sx={{ position: 'absolute' }}
                           size='28px'
                           color="inherit" />
                        Submit
                     </Button>
                  </Box>
               </Grid>
            </Grid>
         </Card>
      </>
   );
};

export default NewProductComponent;