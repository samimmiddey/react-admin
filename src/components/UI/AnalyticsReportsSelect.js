import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AnalyticsReportsSelect = () => {
   const [age, setAge] = React.useState('Last Week');

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   return (
      <Box sx={theme => ({ minWidth: 120, [theme.breakpoints.down('375')]: {width: '100%'} })}>
         <FormControl fullWidth size='small'>
            <InputLabel>Period</InputLabel>
            <Select
               value={age}
               label="Period"
               onChange={handleChange}
            >
               <MenuItem value='Last Week'>Last Week</MenuItem>
               <MenuItem value='Last Month'>Last Month</MenuItem>
               <MenuItem value='Last Year'>Last Year</MenuItem>
            </Select>
         </FormControl>
      </Box>
   );
}

export default AnalyticsReportsSelect;
