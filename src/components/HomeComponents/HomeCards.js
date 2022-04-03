import React from 'react';
import CardData from '../../data/HomeCardData';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const TypographyHeader = styled('div')({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between'
});

const buttonColors = ['#ffebee', '#fce4ec', '#f3e5f5', '#e1f5fe', '#e0f7fa', '#e0f2f1'];
const iconColors = ['#ef9a9a', '#f48fb1', '#ce93d8', '#81d4fa', '#80deea', '#80cbc4'];

const HomeCard = () => {
   const darkMode = useSelector(state => state.ui.darkMode);

   const homeCards = CardData.map((item, index) => {
      return (
         <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card elevation={0} sx={{paddingBottom: '10px'}}>
               <CardContent>
                  <TypographyHeader>
                     <Typography gutterBottom variant="h6" sx={{fontSize: '18px'}} color='text.primary'>
                        {item.name}
                     </Typography>
                     <Typography gutterBottom variant="p" color='primary' sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                     }}>
                        <IconButton size='small'>
                           <ExpandMoreIcon color='primary' />
                        </IconButton>
                        {item.percentage}
                     </Typography>
                  </TypographyHeader>
                  <Typography variant="h4" color="text.disabled" mt={2} sx={{color: `${iconColors[index]}`}}>
                     {item.quantity}
                  </Typography>
               </CardContent>
               <CardActions sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
               }}>
                  <Button sx={{ textDecoration: 'underline' }} size="small">{item.details}</Button>
                  <Button size="small" sx={{ minWidth: 0, minHeight: 0, padding: '6px 10px', marginRight: '8px', backgroundColor: darkMode ? '#34444b' : `${buttonColors[index]}`, color: `${iconColors[index]}` }}>{item.icon}</Button>
               </CardActions>
            </Card>
         </Grid>
      )
   });

   return (
      <Grid container spacing={2}>
         {homeCards}
      </Grid >
   );
};

export default HomeCard;