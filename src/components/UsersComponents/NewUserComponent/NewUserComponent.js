import React, { useState, useRef } from 'react';
import { Box, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { TextField, Button, Typography, Card, styled } from '@mui/material';
import SelectStatus from '../../UI/SelectStatus';
import img from '../../../assets/fillup.svg';
import FormHeader from '../../UI/FormHeader';
import CircularProgress from "@mui/material/CircularProgress";

const InputBox = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   rowGap: '16px'
});

const RadioSelectDiv = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '10px',
   rowGap: '16px'
});

const RadioContainer = styled('div')({
   display: 'flex',
   alignItems: 'flex-end',
   columnGap: '20px',
   marginBottom: '10px'
});

const RadioContainerDiv = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   rowGap: '2px',
});

const regEx = {
   firstName: /^[A-Z][a-z]{2,20}$/,
   lastName: /^[A-Z][a-z]{2,20}$/,
   email: /^([a-z0-9_.-]+)@([a-z\d-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/,
   phone: /^[0-9]{10}$/,
   image: /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#%?=~_|!:,.;]*[-A-Z0-9+&@#%=~_|])/ig,
   address: /^([A-Z][a-z0-9,]{2,})+\s+([A-Z][a-z0-9,]{2,})$/ig,
   age: /^[0-9]{1,3}$/
};

const isEmpty = value => value.trim() === '';

const NewUserComponent = (props) => {
   const [loading, setLoading] = useState(false);
   const [emptyField, setEmptyField] =
      useState({
         firstName: false,
         lastName: false,
         email: false,
         phone: false,
         image: false,
         address: false,
         age: false
      });

   const [regexValidity, setRegexValidity] =
      useState({
         firstName: true,
         lastName: true,
         email: true,
         phone: true,
         image: true,
         address: true,
         age: true
      });

   const [gender, setGender] = useState('');
   const [status, setStatus] = useState('');
   const [errorRadio, setErrorRadio] = useState(false);
   const [statusError, setStatusError] = useState(false);
   const firstNameRef = useRef();
   const lastNameRef = useRef();
   const emailRef = useRef();
   const phoneRef = useRef();
   const imageRef = useRef();
   const addressRef = useRef();
   const ageRef = useRef();

   const radioHandler = e => {
      setGender(e.target.value);
   }

   const selectHandler = (data) => {
      setStatus(data);
   }

   const formSubmitHandler = e => {
      e.preventDefault();

      const enteredFirstName = firstNameRef.current.value;
      const enteredLastName = lastNameRef.current.value;
      const enteredEmail = emailRef.current.value;
      const enteredPhone = phoneRef.current.value;
      const enteredImage = imageRef.current.value;
      const enteredAddress = addressRef.current.value;
      const enteredAge = ageRef.current.value;
      const enteredGender = gender;
      const enteredStatus = status;

      const firstNameEmptyCheck = isEmpty(enteredFirstName);
      const lastNameEmptyCheck = isEmpty(enteredLastName);
      const emailEmptyCheck = isEmpty(enteredEmail);
      const phoneEmptyCheck = isEmpty(enteredPhone);
      const imageEmptyCheck = isEmpty(enteredImage);
      const addressEmptyCheck = isEmpty(enteredAddress);
      const ageEmptyCheck = isEmpty(enteredAge);
      const genderEmptyCheck = enteredGender.trim() === '';
      const statusEmptyCheck = enteredStatus.trim() === '';

      setErrorRadio(genderEmptyCheck);
      setStatusError(statusEmptyCheck);

      const firstNameValidityCheck = regEx.firstName.test(enteredFirstName);
      const lastNameValidityCheck = regEx.lastName.test(enteredLastName);
      const emailValidityCheck = regEx.email.test(enteredEmail);
      const phoneValidityCheck = regEx.phone.test(+enteredPhone);
      const imageValidityCheck = regEx.image.test(enteredImage);
      const addressValidityCheck = regEx.address.test(enteredAddress);
      const ageValidityCheck = regEx.age.test(+enteredAge);

      setEmptyField({
         firstName: firstNameEmptyCheck,
         lastName: lastNameEmptyCheck,
         email: emailEmptyCheck,
         phone: phoneEmptyCheck,
         image: imageEmptyCheck,
         address: addressEmptyCheck,
         age: ageEmptyCheck
      });

      setRegexValidity({
         firstName: firstNameValidityCheck,
         lastName: lastNameValidityCheck,
         email: emailValidityCheck,
         phone: phoneValidityCheck,
         image: imageValidityCheck,
         address: addressValidityCheck,
         age: ageValidityCheck
      });

      if (
         firstNameEmptyCheck || !firstNameValidityCheck ||
         lastNameEmptyCheck || !lastNameValidityCheck ||
         emailEmptyCheck || !emailValidityCheck ||
         phoneEmptyCheck || !phoneValidityCheck ||
         imageEmptyCheck || !imageValidityCheck ||
         addressEmptyCheck || !addressValidityCheck ||
         ageEmptyCheck || !ageValidityCheck ||
         genderEmptyCheck || statusEmptyCheck
      ) {
         return;
      }

      setLoading(true);

      props.onSubmit({
         id: Math.floor(Math.random() * 10000),
         firstName: enteredFirstName,
         lastName: enteredLastName,
         img: enteredImage,
         age: enteredAge,
         email: enteredEmail,
         status: enteredStatus
      });
   }

   const errorFirstName = emptyField.firstName ? true : false;
   const errorLastName = emptyField.lastName ? true : false;
   const errorEmail = emptyField.email ? true : false;
   const errorPhone = emptyField.phone ? true : false;
   const errorImage = emptyField.image ? true : false;
   const errorAddress = emptyField.address ? true : false;
   const errorAge = emptyField.age ? true : false;

   return (
      <>
         <FormHeader header='Add New User' />
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
                           error={errorFirstName || !regexValidity.firstName}
                           inputRef={firstNameRef}
                           required
                           label={errorFirstName || !regexValidity.firstName ? 'Error' : 'First Name'}
                           id="outlined-error-helper-text"
                           helperText={!errorFirstName && !regexValidity.firstName ? 'Incorrect Entry' : ''}
                           placeholder='First Name'
                        />
                        <TextField
                           error={errorLastName || !regexValidity.lastName}
                           inputRef={lastNameRef}
                           required
                           label={errorLastName || !regexValidity.lastName ? 'Error' : 'Last Name'}
                           helperText={!errorLastName && !regexValidity.lastName ? 'Incorrect Entry' : ''}
                           placeholder='Last Name'
                        />
                        <TextField
                           error={errorEmail || !regexValidity.email}
                           inputRef={emailRef}
                           required
                           label={errorEmail || !regexValidity.email ? 'Error' : 'Email'}
                           helperText={!errorEmail && !regexValidity.email ? 'Incorrect Entry' : ''}
                           placeholder='Email'
                        />
                        <TextField
                           error={errorPhone || !regexValidity.phone}
                           inputRef={phoneRef}
                           required
                           type='number'
                           label={errorPhone || !regexValidity.phone ? 'Error' : 'Phone'}
                           helperText={!errorPhone && !regexValidity.phone ? 'Incorrect Entry' : ''}
                           placeholder='Phone'
                        />
                        <TextField
                           error={errorImage || !regexValidity.image}
                           inputRef={imageRef}
                           sx={{ mt: 1, pt: 1 }}
                           variant='standard'
                           label={errorImage || !regexValidity.image ? 'Error' : 'Image'}
                           helperText={!errorImage && !regexValidity.image ? 'Incorrect Entry' : ''}
                           placeholder='Image'
                        />
                        <TextField
                           error={errorAddress || !regexValidity.address}
                           inputRef={addressRef}
                           sx={{ pt: 1 }}
                           variant='standard'
                           label={errorAddress || !regexValidity.address ? 'Error' : 'Address'}
                           helperText={!errorAddress && !regexValidity.address ? 'Incorrect Entry' : ''}
                           placeholder='Address'
                        />
                        <RadioSelectDiv>
                           <RadioContainer>
                              <RadioContainerDiv>
                                 <Typography>Gender</Typography>
                                 <RadioGroup row onChange={radioHandler}>
                                    <FormControlLabel value="female" control={<Radio sx={{ color: `${errorRadio ? 'red' : ''}` }} />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio sx={{ color: `${errorRadio ? 'red' : ''}` }} />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio sx={{ color: `${errorRadio ? 'red' : ''}` }} />} label="Other" />
                                 </RadioGroup>
                              </RadioContainerDiv>
                              <TextField
                                 required
                                 error={errorAge || !regexValidity.age}
                                 inputRef={ageRef}
                                 type='number'
                                 label={errorAge || !regexValidity.age ? 'Error' : 'Age'}
                                 helperText={!errorAge && !regexValidity.age ? 'Incorrect Entry' : ''}
                                 placeholder='Age'
                              />
                           </RadioContainer>
                           <SelectStatus onSelect={selectHandler} onError={statusError} />
                        </RadioSelectDiv>
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

export default NewUserComponent;