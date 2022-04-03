import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LanguagePicker from '../UI/LanguagePicker';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

export default function PrimarySearchAppBar() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
   const isMenuOpen = Boolean(anchorEl);
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

   const theme = useTheme();
   const xsmWidth = useMediaQuery(theme.breakpoints.down('375'));

   const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
   };

   const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
   };

   const renderMenu = (
      <Menu
         anchorEl={anchorEl}
         anchorOrigin={{
            vertical: "top",
            horizontal: "right"
         }}
         keepMounted
         transformOrigin={{
            vertical: "top",
            horizontal: "right"
         }}
         open={isMenuOpen}
         onClose={handleMenuClose}
      >
         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
   );

   const renderMobileMenu = (
      <Menu
         anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{
            vertical: "top",
            horizontal: "right"
         }}
         keepMounted
         transformOrigin={{
            vertical: "top",
            horizontal: "right"
         }}
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
      >
         <MenuItem>
            <LanguagePicker />
            <p>Language</p>
         </MenuItem>
         <MenuItem>
            <IconButton size="large" color="inherit">
               <Badge badgeContent={4} color="error">
                  <MailOutlinedIcon />
               </Badge>
            </IconButton>
            <p>Messages</p>
         </MenuItem>
         <MenuItem>
            <IconButton
               size="large"
               color="inherit"
            >
               <Badge badgeContent={17} color="error">
                  <NotificationsNoneOutlinedIcon />
               </Badge>
            </IconButton>
            <p>Notifications</p>
         </MenuItem>
         <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
               size="large"
               color="inherit"
            >
               <AccountCircleOutlinedIcon />
            </IconButton>
            <p>Profile</p>
         </MenuItem>
      </Menu>
   );

   return (
      <Box>
         <Box sx={{ display: { xs: "none", md: "flex", alignItems: 'center', columnGap: '10px' } }}>
            <LanguagePicker />
            <IconButton
               size="large"
            >
               <Badge badgeContent={4} color="error">
                  <MailOutlinedIcon />
               </Badge>
            </IconButton>
            <IconButton
               size="large"
            >
               <Badge badgeContent={17} color="error">
                  <NotificationsNoneOutlinedIcon />
               </Badge>
            </IconButton>
            <IconButton
               size="large"
               onClick={handleProfileMenuOpen}
            >
               <AccountCircleOutlinedIcon />
            </IconButton>
         </Box>
         <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
               size={xsmWidth ? 'medium' : 'large'}
               onClick={handleMobileMenuOpen}
               edge='end'
            >
               <SettingsOutlinedIcon />
            </IconButton>
         </Box>
         {renderMobileMenu}
         {renderMenu}
      </Box>
   );
}