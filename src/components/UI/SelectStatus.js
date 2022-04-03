import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
   const [status, setStatus] = useState('');
   const handleChange = (event) => {
      props.onSelect(event.target.value);
      setStatus(event.target.value);
   };

   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
            error={props.onError}
               value={status}
               label="Status"
               onChange={handleChange}
            >
               <MenuItem value='Approved'>Aprroved</MenuItem>
               <MenuItem value='Pending'>Pending</MenuItem>
            </Select>
         </FormControl>
      </Box>
   );
}
