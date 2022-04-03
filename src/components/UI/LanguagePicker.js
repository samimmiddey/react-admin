import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const options = [
   'English',
   'Hindi',
   'Bangla'
];

const ITEM_HEIGHT = 48;

const LanguagePicker = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div>
         <IconButton
         size='large'
            onClick={handleClick}
         >
            <LanguageOutlinedIcon />
         </IconButton>
         <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
               style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '10ch',
               },
            }}
         >
            {options.map((option) => (
               <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
               </MenuItem>
            ))}
         </Menu>
      </div>
   );
}

export default LanguagePicker;
