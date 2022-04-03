import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent, Typography, Button, styled, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const ResponsiveDiv = styled('div')(({ theme }) => ({
   marginBottom: '20px',
   display: 'flex',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      rowGap: '10px',
      alignItems: 'flex-start',
      width: '100%'
   },
   [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      justifyContent: 'space-between',
   }
}));


const User = styled('div')({
   display: 'flex',
   alignItems: 'center',
   columnGap: '24px',
   justifyContent: 'flex-start'
});

const Img = styled('img')({
   height: '40px',
   width: '40px',
   borderRadius: '50%',
   objectFit: 'cover'
});

const UserList = (props) => {
   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));
   const darkMode = useSelector(state => state.ui.darkMode);

   const columns = [
      {
         field: 'id',
         headerName: 'ID',
         width: 100
      },
      {
         field: 'firstName',
         headerName: 'First name',
         width: 175
      },
      {
         field: 'lastName',
         headerName: 'Last name',
         width: 175
      },
      {
         field: 'users',
         headerName: 'Users',
         description: 'This column has a value getter and is not sortable.',
         sortable: false,
         width: 250,
         renderCell: (params) => {
            return (
               <User>
                  <Img src={params.row.img} alt="" />
                  {params.row.firstName || ''} {params.row.lastName}
               </User>
            )
         }
      },
      {
         field: 'age',
         headerName: 'Age',
         type: 'number',
         width: 100,
      },
      {
         field: 'email',
         headerName: 'Email',
         width: 300
      },
      {
         field: 'status',
         headerName: 'Status',
         width: 175,
         renderCell: (params) => {
            return (
               <Button
                  size='small'
                  variant="outlined"
                  sx={{
                     borderColor: darkMode ? `${params.row.status === 'Approved' ? '#2e7d32' : '#9e9d24'}` : `${params.row.status === 'Approved' ? '#c8e6c9' : '#f0f4c3'}`,
                     backgroundColor: darkMode ? `${params.row.status === 'Approved' ? '#2e7d32' : '#9e9d24'}` : `${params.row.status === 'Approved' ? '#c8e6c9' : '#f0f4c3'}`,
                     color: darkMode ? `${params.row.status === 'Approved' ? '#fff' : '#fff'}` : `${params.row.status === 'Approved' ? '#43a047' : '#afb42b'}`,
                     '&:hover': {
                        borderColor: `${params.row.status === 'Approved' ? '#1b5e20' : '#827717'}`,
                        backgroundColor: `${params.row.status === 'Approved' ? '#1b5e20' : '#827717'}`,
                     },
                  }}
               >
                  {params.row.status}
               </Button>
            )
         }
      },
      {
         field: 'actions',
         headerName: 'Actions',
         width: 175,
         renderCell: (params) => {
            return (
               <div style={{ display: 'flex', columnGap: '10px' }}>
                  <Link to={`/users/${params.id}`} style={{ textDecoration: 'none' }}>
                     <Button
                        size='small'
                        variant='outlined'
                        sx={{
                           borderColor: darkMode ? '#4caf50' : '#a5d6a7',
                           color: '#4caf50',
                           '&:hover': {
                              backgroundColor: '#4caf50',
                              borderColor: '#4caf50',
                              color: '#fff'
                           },
                        }}
                     >
                        view
                     </Button>
                  </Link>
                  <Button
                     size='small'
                     variant="outlined"
                     sx={{
                        borderColor: darkMode ? '#f44336' : '#ef9a9a',
                        color: '#f44336',
                        '&:hover': {
                           backgroundColor: '#f44336',
                           borderColor: '#f44336',
                           color: '#fff'
                        }
                     }}
                  >
                     delete
                  </Button>
               </div>
            )
         }
      }
   ];

   return (
      <Card elevation={0} sx={{ padding: '10px 10px' }}>
         <CardContent>
            <ResponsiveDiv>
               <Typography color='text.primary' variant='h6' sx={{ fontWeight: 600 }}>User List</Typography>
               <Link to='users/newuser' style={{ textDecoration: 'none', width: `${smWidth ? '100%' : ''}` }}>
                  <Button variant='outlined' sx={{ width: { xs: '100%', sm: 'inherit' } }}>Add New User</Button>
               </Link>
            </ResponsiveDiv>
            <div style={{ height: '70vh', width: '100%' }}>
               <DataGrid
                  sx={{ border: `1px solid ${darkMode ? '#455a64' : '#eceff1'}` }}
                  rows={props.rows}
                  columns={columns}
                  pageSize={7}
                  rowsPerPageOptions={[7]}
                  checkboxSelection
                  disableSelectionOnClick
                  density='comfortable'
               />
            </div>
         </CardContent>
      </Card>
   );
}

export default UserList;
