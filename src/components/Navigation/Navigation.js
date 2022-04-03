import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { styled } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   padding: theme.spacing(0, 1),
   paddingLeft: 25,
   ...theme.mixins.toolbar,
}));

const BoxComponent = styled(Box)(({ theme }) => ({
   [theme.breakpoints.down('xl')]: {
      margin: '0'
   }
}));

export default function Navigation(props) {
   return (
      <Box
         display={{ xl: 'flex' }}
      >
         {/* NavBar */}
         <Navbar />
         {/* Drawer Sidebar */}
         <Sidebar />
         {/* Children */}
         <BoxComponent component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {props.children}
         </BoxComponent>
      </Box>
   );
}