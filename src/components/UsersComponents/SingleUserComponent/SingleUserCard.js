import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Avatar, Divider } from '@mui/material';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';

const SingleUserComponent = (props) => {
   const { userID } = useParams();
   const id = +userID;

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   if (props.userData.length <= 0) {
      return null;
   } else {
      const findItem = props.userData.find((item) => item.id === id);
      if (!findItem) {
         return (
            <Redirect to='/users' />
         )
      }
   }

   const index = props.userData.findIndex(item => item.id === id);

   return (
      <Card elevation={0} sx={{ padding: '16px', margin: '0 auto 24px auto', width: `${mdWidth ? '100%' : '70%'}` }}>
         <CardContent>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>Customer Details</Typography>
         </CardContent>
         <Divider sx={{ margin: '0 0 1rem 0' }} />
         <CardContent
            sx={theme => ({
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               [theme.breakpoints.down('md')]: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  rowGap: '16px'
               }
            })}
         >
            <Box
               sx={theme => ({
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '2rem',
                  [theme.breakpoints.down('md')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     justifyContent: 'center',
                     rowGap: '25px'
                  }
               })}
            >
               <Avatar alt='profile' sx={{ height: '75px', width: '75px' }} src={props.userData[index].img} />
               <div>
                  <Typography gutterBottom variant='h5' sx={{ fontSize: '1rem', fontWeight: 600 }}>{props.userData[index].email}</Typography>
                  <Typography sx={{ fontSize: '14px' }}>user_id : {props.userData[index].id}</Typography>
               </div>
            </Box>
            <CardActions sx={{ display: 'flex', alignItems: 'center', columnGap: '5px', padding: 0 }}>
               <Button sx={{ display: 'flex', alignItems: 'center', columnGap: '5px' }} variant='outlined'>Edit <EditIcon sx={{ fontSize: '16px' }} /></Button>
               <Button disableElevation={true} sx={{ display: 'flex', alignItems: 'center', columnGap: '5px' }} variant='contained'>Action <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} /></Button>
            </CardActions>
         </CardContent>
         <CardContent>
            <Card elevation={0}>
               <CardContent sx={{ padding: '32px 24px' }}>
                  <Typography sx={{ fontWeight: 600 }}>Basic Details</Typography>
               </CardContent>
               <Divider />
               <CardContent sx={theme => ({
                  padding: '16px 24px', display: 'flex', alignItems: 'center', [theme.breakpoints.down('md')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start'
                  }
               })}>
                  <div style={{ width: `${mdWidth ? '100%' : '30%'}` }}>
                     <Typography sx={{ fontWeight: 500, fontSize: '15px', color: 'text.secondary' }}>First Name</Typography>
                  </div>
                  <div>
                     <Typography sx={{ fontSize: '15px', color: 'text.disabled', }}>{props.userData[index].firstName}</Typography>
                  </div>
               </CardContent>
               <Divider />
               <CardContent sx={theme => ({
                  padding: '16px 24px', display: 'flex', alignItems: 'center', [theme.breakpoints.down('md')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start'
                  }
               })}>
                  <div style={{ width: `${mdWidth ? '100%' : '30%'}` }}>
                     <Typography sx={{ fontWeight: 500, fontSize: '15px', color: 'text.secondary' }}>Last Name</Typography>
                  </div>
                  <div>
                     <Typography sx={{ fontSize: '15px', color: 'text.disabled', }}>{props.userData[index].lastName}</Typography>
                  </div>
               </CardContent>
               <Divider />
               <CardContent sx={theme => ({
                  padding: '16px 24px', display: 'flex', alignItems: 'center', [theme.breakpoints.down('md')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start'
                  }
               })}>
                  <div style={{ width: `${mdWidth ? '100%' : '30%'}` }}>
                     <Typography sx={{ fontWeight: 500, fontSize: '15px', color: 'text.secondary' }}>Email</Typography>
                  </div>
                  <div>
                     <Typography sx={{ fontSize: '15px', color: 'text.disabled', }}>{props.userData[index].email}</Typography>
                  </div>
               </CardContent>
               <Divider />
               <CardContent sx={theme => ({
                  padding: '16px 24px', display: 'flex', alignItems: 'center', [theme.breakpoints.down('md')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start'
                  }
               })}>
                  <div style={{ width: `${mdWidth ? '100%' : '30%'}` }}>
                     <Typography sx={{ fontWeight: 500, fontSize: '15px', color: 'text.secondary' }}>Age</Typography>
                  </div>
                  <div>
                     <Typography sx={{ fontSize: '15px', color: 'text.disabled', }}>{props.userData[index].age}</Typography>
                  </div>
               </CardContent>
               <Divider />
               <CardContent sx={theme => ({
                  padding: '16px 24px', display: 'flex', alignItems: 'center', [theme.breakpoints.down('md')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start'
                  }
               })}>
                  <div style={{ width: `${mdWidth ? '100%' : '30%'}` }}>
                     <Typography sx={{ fontWeight: 500, fontSize: '15px', color: 'text.secondary' }}>ID</Typography>
                  </div>
                  <div>
                     <Typography sx={{ fontSize: '15px', color: 'text.disabled', }}>{props.userData[index].id}</Typography>
                  </div>
               </CardContent>
               <Divider />
               <CardContent sx={theme => ({
                  padding: '16px 24px', display: 'flex', alignItems: 'center', [theme.breakpoints.down('md')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start'
                  }
               })}>
                  <div style={{ width: `${mdWidth ? '100%' : '30%'}` }}>
                     <Typography sx={{ fontWeight: 500, fontSize: '15px', color: 'text.secondary' }}>Status</Typography>
                  </div>
                  <div>
                     <Typography sx={{ fontSize: '15px', color: 'text.disabled', }}>{props.userData[index].status}</Typography>
                  </div>
               </CardContent>
               <Divider />
               <CardContent
                  sx={theme => ({
                     padding: '24px',
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '10px',
                     [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        rowGap: '10px',
                     }
                  })}>
                  <Button variant='outlined'>Reset Email</Button>
                  <Button variant='outlined'>Reset Password</Button>
               </CardContent>
            </Card>
         </CardContent >
      </Card >
   );
};

export default SingleUserComponent;