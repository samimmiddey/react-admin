import * as React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { alpha } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { Backdrop } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

// Search Bar Style
const Search = styled('div', {
   shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, darkmode }) => ({
   position: 'relative',
   border: `1px solid ${darkmode === 'true' ? '#455a64' : '#ddd'}`,
   borderRadius: theme.shape.borderRadius,
   backgroundColor: `${darkmode === 'true' ? '#263238' : theme.palette.common.white}`,
   display: 'flex',
   alignItems: 'center',
   marginLeft: theme.spacing(3),
   width: 'auto',
   paddingLeft: '10px',
   [theme.breakpoints.up('lg')]: {
      '&:hover': {
         backgroundColor: alpha(theme.palette.common.black, 0.025),
      },
   },
   [theme.breakpoints.down('lg')]: {
      position: 'fixed',
      top: '16px',
      left: '10px',
      right: '24px',
      zIndex: 98,
   },
}));

// Search Input Style
const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   width: '100%',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(10px + ${ theme.spacing(0) })`,
      transition: theme.transitions.create('width'),
      width: '100%',
   }
}));

const SearchModal = () => {
   const darkMode = useSelector(state => state.ui.darkMode);
   const dispatch = useDispatch();
   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));

   return (
      <>
         <Backdrop onClick={() => { dispatch(uiActions.toggleModal(false)) }} open={lgWidth} />
         <Search darkmode={darkMode.toString()}>
            <SearchOutlinedIcon />
            <StyledInputBase
               placeholder="Search…"
               inputProps={{ 'aria-label': 'search' }}
            />
         </Search>
      </>
   );
}

export default SearchModal;
