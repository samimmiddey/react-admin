import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';

const LoadButton = () => {
   return (
      <Stack direction="row" spacing={2}>
         <LoadingButton loading variant="outlined">
            Submit
         </LoadingButton>
      </Stack>
   );
}

export default LoadButton;
