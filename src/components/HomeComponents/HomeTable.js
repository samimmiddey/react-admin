import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

const HomeTable = (props) => {
   const darkMode = useSelector(state => state.ui.darkMode);

   return (
      <Card elevation={0} sx={{ padding: '24px' }}>
        <CardContent sx={{paddingLeft: 0, paddingTop: 0}}>
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Customers</Typography>
         </CardContent>
         <TableContainer component={Paper} elevation={0} sx={{ borderBottom: 'none' }}>
            <Table sx={{ minWidth: 650 }}>
               <TableHead>
                  <TableRow>
                     <TableCell>Tracking ID</TableCell>
                     <TableCell align="left">Product</TableCell>
                     <TableCell align="left">Customer</TableCell>
                     <TableCell align="left">Date</TableCell>
                     <TableCell align="left">Amount</TableCell>
                     <TableCell align="left">Payment Method</TableCell>
                     <TableCell align="left">Status</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {props.data.map((row) => (
                     <TableRow
                        key={row.id}
                     >
                        <TableCell>
                           {row.id}
                        </TableCell>
                        <TableCell align="left">{row.product}</TableCell>
                        <TableCell align="left"><div style={{ display: 'flex', alignItems: 'center', columnGap: '16px' }}><Avatar alt="" src={row.img} />{row.customer}</div></TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">{row.amount}</TableCell>
                        <TableCell align="left">{row.method}</TableCell>
                        <TableCell align="left">
                           <Button
                              size='small'
                              sx={{
                                 borderColor: darkMode ? `${row.status === 'Approved' ? '#81c784' : '#dce775'}` : `${row.status === 'Approved' ? '#c8e6c9' : '#f0f4c3'}`,
                                 backgroundColor: darkMode ? `${row.status === 'Approved' ? '#81c784' : '#dce775'}` : `${row.status === 'Approved' ? '#c8e6c9' : '#f0f4c3'}`,
                                 color: darkMode ? `${row.status === 'Approved' ? '#1b5e20' : '#827717'}` : `${row.status === 'Approved' ? '#43a047' : '#afb42b'}`,
                                 '&:hover': {
                                    borderColor: `${row.status === 'Approved' ? '#a5d6a7' : '#e6ee9c'}`,
                                    backgroundColor: `${row.status === 'Approved' ? '#a5d6a7' : '#e6ee9c'}`,
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
      </Card>
   );
}

export default HomeTable;