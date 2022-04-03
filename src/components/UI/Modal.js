import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const CustomModal = (props) => {
   const [open, setOpen] = React.useState(true);
   const dispatch = useDispatch();

   const handleClose = () => {
      dispatch(authActions.showAuthenticatedModal(false));
      setOpen(false);
   };

   return (
      <Modal
         open={open}
         onClose={handleClose}
      >
         <Box sx={theme => ({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            textAlign: 'center',
            p: '60px 30px',
            color: `${props.authentication ? '#f44336' : '#66bb6a'}`,
            borderRadius: '10px',
            border: `2px solid ${props.authentication ? '#f44336' : '#66bb6a'}`,
            [theme.breakpoints.down('sm')]: {
               width: 250,
               fontSize: '14px',
               p: '40px 30px',
            }
         })}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               {props.message}
            </Typography>
         </Box>
      </Modal>
   );
}

export default CustomModal;