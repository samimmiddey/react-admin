import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function VariantButtonGroup() {
   return (
      <ButtonGroup variant="outlined" size='large'>
         <Button sx={{ minHeight: 0, minWidth: 0, padding: '10px 8px' }}><RemoveOutlinedIcon sx={{ fontSize: '16px' }} /></Button>
         <Button sx={{ minHeight: 0, minWidth: 0, padding: '10px 8px' }}>1</Button>
         <Button sx={{ minHeight: 0, minWidth: 0, padding: '10px 8px' }}><AddOutlinedIcon sx={{ fontSize: '16px' }} /></Button>
      </ButtonGroup>
   );
}
