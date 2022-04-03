import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessSnackbar = () => {
   const open = useSelector(state => state.ui.showSuccess);
   const dispatch = useDispatch();

   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }
      dispatch(uiActions.showSnackbar(false));
   };

   return (
      <Stack spacing={2} sx={{ width: "100%" }}>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success"
               sx={{ width: "100%", margin: {xl: '0 0 10px 50px'} }}
            >
               Successfully Added!
            </Alert>
         </Snackbar>
      </Stack>
   );
}

export default SuccessSnackbar;
