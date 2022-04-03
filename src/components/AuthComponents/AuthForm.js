import React, { useState, useRef } from 'react';
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { useHistory } from 'react-router-dom';
import CustomModal from '../UI/Modal';

const regEx = {
   name: /^\s*([A-Za-z]{1,}([.,] |[-']| ))+[A-Za-z]+\.?\s*$/,
   username: /^[a-zA-Z0-9]{5,12}$/,
   email: /^([a-z0-9_.-]+)@([a-z\d-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/,
   password: /^[A-Za-z0-9]+$/
};

const isEmpty = value => value.trim() === '';

const AuthForm = () => {
   const [showModal, setShowModal] = useState(false);
   const [responseText, setResponseText] = useState('');
   const [authenticated, setAuthenticated] = useState(false);
   const [loading, setLoading] = useState(false);
   const [login, setLogin] = useState(true);
   const history = useHistory();
   const dispatch = useDispatch();

   const [emptyField, setEmptyField] =
      useState({
         name: false,
         username: false,
         email: false,
         password: false
      });

   const [regexValidity, setRegexValidity] =
      useState({
         name: true,
         username: true,
         email: true,
         password: true,
      });

   const nameRef = useRef();
   const usernameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();

   const signupHandler = () => {
      setLogin(false);
   }

   const loginHandler = () => {
      setLogin(true);
   }

   const formSubmitHandler = e => {
      e.preventDefault();

      const enteredName = !login ? nameRef.current.value : '';
      const enteredUsername = !login ? usernameRef.current.value : '';
      const enteredEmail = emailRef.current.value;
      const enteredPassword = passwordRef.current.value;

      const nameEmptyCheck = !login ? isEmpty(enteredName) : false;
      const usernameEmptyCheck = !login ? isEmpty(enteredUsername) : false;
      const emailEmptyCheck = isEmpty(enteredEmail);
      const passwordEmptyCheck = isEmpty(enteredPassword);

      const nameValidityCheck = !login ? regEx.name.test(enteredName) : true;
      const usernameValidityCheck = !login ? regEx.username.test(enteredUsername) : true;
      const emailValidityCheck = regEx.email.test(enteredEmail);
      const passwordValidityCheck = regEx.password.test(enteredPassword);

      setEmptyField({
         name: nameEmptyCheck,
         username: usernameEmptyCheck,
         email: emailEmptyCheck,
         password: passwordEmptyCheck,
      });

      setRegexValidity({
         name: nameValidityCheck,
         username: usernameValidityCheck,
         email: emailValidityCheck,
         password: passwordValidityCheck,
      });

      if (
         (!login && nameEmptyCheck) || (!login && !nameValidityCheck) ||
         (!login && usernameEmptyCheck) || (!login && !usernameValidityCheck) ||
         emailEmptyCheck || !emailValidityCheck ||
         passwordEmptyCheck || !passwordValidityCheck
      ) {
         return;
      }

      // Login & Signup
      let url;
      if (login) {
         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCrLLEGf89LLuRO8AIyIELqF0UnoiOKZFE';
      } else {
         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCrLLEGf89LLuRO8AIyIELqF0UnoiOKZFE';
      }

      setLoading(true);
      const signupFetchHandler = async () => {
         setShowModal(false);
         setAuthenticated(false);
         try {
            const response = await fetch(url,
               {
                  method: 'POST',
                  body: JSON.stringify({
                     email: enteredEmail,
                     password: enteredPassword,
                     returnSecureToken: true
                  }),
                  headers: {
                     'Content-Type': 'application/json'
                  }
               });

            const data = await response.json();

            if (!response.ok) {
               setShowModal(true);
               setAuthenticated(true);
               setLoading(false);
               let message = '';
               if (data.error.message === 'WEAK_PASSWORD : Password should be at least 6 characters') {
                  message = 'Password should be at least 6 characters!';
               } else if (data.error.message === 'EMAIL_EXISTS') {
                  message = 'Email exists! Try a different Email.';
               } else if(data.error.message === 'EMAIL_NOT_FOUND') {
                  message = 'Email Not Found!';
               } else if(data.error.message === 'INVALID_PASSWORD') {
                  message = 'Invalid Password!';
               } else if (data.error.message === 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.') {
                  message = 'Too many attempts. Try later!'
               }
               throw new Error(message);
            } else {
               setShowModal(true);
               setAuthenticated(false);
               dispatch(authActions.showAuthenticatedModal(true));
               localStorage.setItem('authData', data.idToken);
               dispatch(authActions.doAuthentication(true));
               history.replace('/');
            }
         } catch (error) {
            setResponseText(error.message);
         }
      }
      signupFetchHandler();
   }

   return (
      <>
         {showModal && <CustomModal message={responseText} authentication={authenticated} />}
         <Box component='form'
            onSubmit={formSubmitHandler}
            noValidate
            autoComplete="off"
            sx={{
               display: 'flex',
               flexDirection: 'column',
               rowGap: '20px',
               width: '100%',
               padding: { xl: '0 10rem', lg: '0 5rem', md: '0 3rem' }
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                  alignItems: 'center',
                  marginBottom: '10px'
               }}
            >
               <Box color='primary'
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     backgroundColor: '#9c27b0',
                     height: '40px',
                     width: '40px',
                     borderRadius: '50%'
                  }}>
                  <LockOutlinedIcon sx={{ color: '#fff' }} />
               </Box>
               <Typography variant='h5' color='text.disabled'>
                  {login && 'Sign In'}
                  {!login && 'Sign Up'}
               </Typography>
            </Box>
            <>
               {!login &&
                  <>
                     <TextField
                        inputRef={nameRef}
                        required
                        error={emptyField.name || !regexValidity.name}
                        placeholder='Name'
                        label={emptyField.name || !regexValidity.name ? 'Error' : 'Name'}
                        helperText={!emptyField.name && !regexValidity.name ? 'Incorrect Entry' : ''}
                     />
                     <TextField
                        inputRef={usernameRef}
                        required
                        error={emptyField.username || !regexValidity.username}
                        placeholder='Username'
                        label={emptyField.username || !regexValidity.username ? 'Error' : 'Username'}
                        helperText={!emptyField.username && !regexValidity.username ? 'Incorrect Entry' : ''}
                     />
                  </>
               }
               <>
                  <TextField
                     inputRef={emailRef}
                     required
                     error={emptyField.email || !regexValidity.email}
                     placeholder='Email'
                     label={emptyField.email || !regexValidity.email ? 'Error' : 'Email'}
                     helperText={!emptyField.email && !regexValidity.email ? 'Incorrect Entry' : ''}
                  />
                  <TextField
                     inputRef={passwordRef}
                     required
                     type='password'
                     error={emptyField.password || !regexValidity.password}
                     placeholder='Password'
                     label={emptyField.password || !regexValidity.password ? 'Error' : 'Password'}
                     helperText={!emptyField.password && !regexValidity.password ? 'Incorrect Entry' : ''}
                  />
               </>
            </>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <Button
               type='submit'
               color='primary'
               variant='contained'
               sx={{
                  width: '100%',
                  minWidth: 0,
                  minHeight: 0,
                  height: '46px',
                  position: 'relative'
               }}
               disabled={loading ? true : false}
            >
               <CircularProgress
                  variant={loading ? 'indeterminate' : 'determinate'}
                  sx={{ position: 'absolute' }}
                  size='28px'
                  color="inherit" />
               {login && 'Submit'}
               {!login && 'Create an account'}
            </Button>
            {
               login &&
               <p
                  onClick={signupHandler}
                  style={{ textAlign: 'center', color: '#1976d2', fontSize: '14px', cursor: 'pointer' }}
               >
                  Don't have an account? Sign Up
               </p>
            }
            {
               !login &&
               <p
                  onClick={loginHandler}
                  style={{ textAlign: 'center', color: '#1976d2', fontSize: '14px', cursor: 'pointer' }}
               >
                  Already have an account? Sign In
               </p>
            }
         </Box>
      </>
   )
}

export default AuthForm;