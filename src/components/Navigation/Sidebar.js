import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DrawerItems, { DrawerTitles } from '../../data/DrawerItems';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { uiActions } from '../../store/ui-slice';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
   width: drawerWidth,
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: 'hidden'
});

const closedMixin = (theme) => ({
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: `calc(${theme.spacing(8)} + 1px)`,
   [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
   },
   [theme.breakpoints.down('xl')]: {
      width: 0
   },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
   ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
         ...openedMixin(theme),
         '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
         ...closedMixin(theme),
         '& .MuiDrawer-paper': closedMixin(theme),
      })
   })
);

export default function Navigation() {
   const dispatch = useDispatch();
   const open = useSelector(state => state.ui.showMenu);
   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const darkMode = useSelector(state => state.ui.darkMode);

   const sidebarHandler = () => {
      if (!xlWidth) {
         return;
      }
      dispatch(uiActions.toggleMenu());
   }

   return (
      <>
         <Backdrop
            onClick={() => dispatch(uiActions.toggleMenu())}
            open={open}
            sx={{ display: { xs: 'block', xl: 'none' }, zIndex: 99 }}
         />
         <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={open}>
               <Divider />
               <List sx={{ marginTop: '65px' }}>
                  {DrawerItems.map((item, index) => {
                     return (
                        <Fragment key={index}>
                           {index > 0 && index % 6 === 0 ? <div style={{ height: '1px', width: '100%', margin: '0.5rem 0' }} /> : ''}
                           {index % 6 === 0 ?
                              <Typography
                                 key={index}
                                 sx={theme => ({
                                    opacity: open ? 1 : 0,
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: 'text.secondary',
                                    padding: '10px 0 10px 20px',
                                    [theme.breakpoints.down('xl')]: {
                                       display: 'block'
                                    },
                                 })}
                              >
                                 {DrawerTitles[index / 6]}
                              </Typography> : ''}
                           <NavLink
                              style={{ textDecoration: 'none' }}
                              activeClassName={darkMode ? 'active-dark' : 'active'}
                              exact={item.text === 'Home' ? true : false}
                              to={
                                 {
                                    ...item.text === 'Home' ? { pathname: '/' } : {
                                       ...item.text === 'Users' ? { pathname: '/users' } : {
                                          ...item.text === 'Sales' ? { pathname: '/sales' } : {
                                             ...item.text === 'Analytics' ? { pathname: '/analytics' } : {
                                                ...item.text === 'Products' ? { pathname: '/products' } : ''
                                             }
                                          }
                                       }
                                    }
                                 }
                              }
                           >
                              <ListItemButton
                                 onClick={sidebarHandler}
                                 className={darkMode ? 'nav-dark' : 'nav'}
                                 sx={theme => ({
                                    margin: '2px 10px',
                                    borderRadius: '8px',
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    [theme.breakpoints.down('xl')]: {
                                       justifyContent: 'initial'
                                    },
                                 })}
                              >
                                 <ListItemIcon
                                    className={darkMode ? 'nav-icon-dark' : 'nav-icon'}
                                    sx={theme => ({
                                       minWidth: 0,
                                       mr: open ? 2 : 'auto',
                                       justifyContent: 'center',
                                       color: `${darkMode ? '#607d8b' : '#999'}`,
                                       [theme.breakpoints.down('xl')]: {
                                          mr: 3
                                       },
                                    })}
                                 >
                                    {item.icon}
                                 </ListItemIcon>
                                 <ListItemText
                                    className={darkMode ? 'nav-child-dark' : 'nav-child'}
                                    primary={<Typography style={{ fontSize: '15px', fontWeight: 500 }}>{item.text}</Typography>}
                                    sx={theme =>
                                    ({
                                       opacity: open ? 1 : 0,
                                       color: 'text.secondary',
                                       [theme.breakpoints.down('xl')]: {
                                          opacity: 1
                                       },
                                    })}
                                 />
                              </ListItemButton>
                           </NavLink>
                        </Fragment>
                     )
                  })}
               </List>
            </Drawer>
         </Box >
      </>
   );
}