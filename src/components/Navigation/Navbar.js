import React, { useState, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { alpha } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import img from '../../assets/Pic-15.jpg';
import MenuIcons from '../UI/MenuIcons';
import SearchModal from '../UI/SearchModal';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { authActions } from '../../store/auth-slice';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Box } from '@mui/system';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, darkmode }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   backgroundColor: `${darkmode === 'true' ? '#1f292e' : '#fff'}`,
   color: theme.palette.text.secondary,
   borderBottom: `1px solid ${darkmode === 'true' ? '#455a64' : '#ddd'}`,
   ...(open && {
      marginLeft: '0px',
      width: '100%',
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   }),
   [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1),
   },
}));

// Search Bar Style
const Search = styled('div', {
   shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, darkmode }) => ({
   border: `1px solid ${darkmode === 'true' ? '#455a64' : '#ddd'}`,
   borderRadius: theme.shape.borderRadius,
   // backgroundColor: theme.palette.common.white,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.025),
   },
   marginLeft: theme.spacing(3),
   width: 'auto',
   padding: '7px 10px',
   cursor: 'pointer',
   [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      padding: '4px 5px',
      borderRadius: '20%'
   },
   [theme.breakpoints.up('lg')]: {
      display: 'none'
   },
}));

// Styled Navbar Icon Div
const MainNav = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '100%'
});

// Logo & Search Div
const HeaderDiv = styled('div')({
   display: 'flex',
   alignItems: 'center',
   marginLeft: '10',
});

// Icon Div
const IconDiv = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   columnGap: '30px',
   [theme.breakpoints.down('md')]: {
      columnGap: '20px'
   }
}));

const Navbar = () => {
   const [scrolled, setScrolled] = useState(false);
   const showMenu = useSelector(state => state.ui.showMenu);
   const showModal = useSelector(state => state.ui.showModal);
   const darkMode = useSelector(state => state.ui.darkMode);
   const dispatch = useDispatch();

   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.up('lg'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));
   const xsmWidth = useMediaQuery(theme.breakpoints.down('375'));

   const handleDrawerOpen = () => {
      dispatch(uiActions.toggleMenu());
   };

   const logoutHandler = () => {
      localStorage.removeItem('authData');
      localStorage.removeItem('darkmode');
      dispatch(uiActions.setDarkMode(false));
      dispatch(authActions.doAuthentication(false));
   }

   const darkModeHandler = () => {
      localStorage.setItem('darkmode', true);
      dispatch(uiActions.setDarkMode(true));
   }

   const lightModeHandler = () => {
      localStorage.removeItem('darkmode');
      dispatch(uiActions.setDarkMode(false));
   }

   useEffect(() => {
      window.onscroll = function () {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };
   }, []);

   return (
      <AppBar
         darkmode={darkMode.toString()}
         position="fixed"
         open={showMenu}
         elevation={0}
         sx={{
            boxShadow: `${scrolled ? '0px 2px 5px -2px rgba(0, 0, 0, 0.7)' : ''}`,
         }}
      >
         <Toolbar>
            <IconButton
               color="inherit"
               aria-label="open drawer"
               onClick={handleDrawerOpen}
               edge="start"
               sx={theme => ({
                  marginRight: 5,
                  [theme.breakpoints.down('xl')]: {
                     marginRight: 2
                  }
               })}
            >
               <MenuIcon />
            </IconButton>
            <MainNav>
               <HeaderDiv>
                  <Typography variant="h6" noWrap
                     sx={{ fontWeight: 600, color: `${darkMode ? '#607d8b' : '#7e57c2'}`, display: { xs: 'none', sm: 'block' } }}
                  >
                     React Admin
                  </Typography>
                  {/* Search Icon */}
                  <Search darkmode={darkMode.toString()} onClick={() => { dispatch(uiActions.toggleModal(true)) }}>
                     <SearchOutlinedIcon fontSize={smWidth ? 'small' : 'medium'} />
                  </Search>
                  {/* <SearchModal /> */}
                  {(lgWidth || showModal) && <SearchModal />}
               </HeaderDiv>
               {/* Navbar Icons */}
               <Box
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '10px',
                     [theme.breakpoints.down('sm')]: {
                        columnGap: '0px',
                     }
                  })}>
                  {!darkMode && <IconButton onClick={darkModeHandler} size={xsmWidth ? 'medium' : 'large'} >
                     <DarkModeOutlinedIcon />
                  </IconButton>}
                  {darkMode && <IconButton onClick={lightModeHandler} size={xsmWidth ? 'medium' : 'large'} >
                     <LightModeIcon />
                  </IconButton>}
                  <IconDiv>
                     <MenuIcons />
                     <Button
                        size='small'
                        variant="outlined"
                        onClick={logoutHandler}
                        sx={theme => ({
                           [theme.breakpoints.down('sm')]: {
                              minWidth: 0,
                              minHeight: 0,
                              padding: '4px',
                              borderRadius: '20%'
                           }
                        })}
                     >
                        {!smWidth ? 'Logout' : <LogoutOutlinedIcon fontSize='small' />}
                     </Button>
                     <Avatar alt="Fiona Smith" src={img} />
                  </IconDiv>
               </Box>
            </MainNav>
         </Toolbar>
      </AppBar >
   );
};

export default Navbar;