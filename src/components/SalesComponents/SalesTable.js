import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardContent, Typography } from '@mui/material';

const SalesTable = (props) => {
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
                        <TableCell align="left">{row.status}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Card >
   );
}

export default SalesTable;