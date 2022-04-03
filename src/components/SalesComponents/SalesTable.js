import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const SalesTable = (props) => {
   const darkMode = useSelector(state => state.ui.darkMode);

   return (
      <Card elevation={0} sx={{ padding: '24px' }}>
         <CardContent sx={{ paddingLeft: 0, paddingTop: 0 }}>
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Orders</Typography>
         </CardContent>
         <TableContainer elevation={0} component={Paper}>
            <Table sx={{ minWidth: 650 }} >
               <TableHead>
                  <TableRow>
                     <TableCell>ID</TableCell>
                     <TableCell align="left">Product</TableCell>
                     <TableCell align="left">Amount</TableCell>
                     <TableCell align="left">Method</TableCell>
                     <TableCell align="left">Status</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {props.tableData.map((row) => (
                     <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell component="th" scope="row">
                           {row.id}
                        </TableCell>
                        <TableCell align="left">{row.product}</TableCell>
                        <TableCell align="left">{row.amount}</TableCell>
                        <TableCell align="left">{row.method}</TableCell>
                        <TableCell align="left">
                           <Button
                              size='small'
                              sx={{
                                 borderColor: darkMode ? `${row.status === 'Approved' ? '#2e7d32' : '#9e9d24'}` : `${row.status === 'Approved' ? '#c8e6c9' : '#f0f4c3'}`,
                                 backgroundColor: darkMode ? `${row.status === 'Approved' ? '#2e7d32' : '#9e9d24'}` : `${row.status === 'Approved' ? '#c8e6c9' : '#f0f4c3'}`,
                                 color: darkMode ? `${row.status === 'Approved' ? '#fff' : '#fff'}` : `${row.status === 'Approved' ? '#43a047' : '#afb42b'}`,
                                 '&:hover': {
                                    borderColor: `${row.status === 'Approved' ? '#1b5e20' : '#827717'}`,
                                    backgroundColor: `${row.status === 'Approved' ? '#1b5e20' : '#827717'}`,
                                 },
                              }}
                              variant='outlined'
                           >
                              {row.status}
                           </Button>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Card >
   );
}

export default SalesTable;