import { Typography, styled } from '@mui/material';
import React from 'react';

const UL = styled('span')({
   display: 'flex',
   flexDirection: 'column',
   rowGap: '20px',
   marginTop: '16px'
});

const ResponsiveSpan = styled('span')(({ theme }) => ({
   display: 'flex',
   marginLeft: '16px',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      rowGap: '5px'
   },
   [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      justifyContent: 'space-between',
   }
}));

const ResponsiveInnerSpan = styled('span')(({ theme }) => ({
   color: '#555',
   fontSize: '14px',
   [theme.breakpoints.down('sm')]: {
      width: '100%'
   },
   [theme.breakpoints.up('sm')]: {
      width: '60%'
   }
}));

const ProductCardTabData = () => {
   return (
      <span style={{ width: '100%' }}>
         <Typography sx={{ marginBottom: '12px', fontSize: '18px', fontWeight: 600 }} component={'span'}>General</Typography>
         <UL>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Type</span>
               <ResponsiveInnerSpan>Hooded Neck, Paint Clothes</ResponsiveInnerSpan>
            </ResponsiveSpan>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Sleve</span>
               <ResponsiveInnerSpan>Full</ResponsiveInnerSpan>
            </ResponsiveSpan>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Fit</span>
               <ResponsiveInnerSpan>Regular</ResponsiveInnerSpan>
            </ResponsiveSpan>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Fabric</span>
               <ResponsiveInnerSpan>Hosiery, Smooth, Silk</ResponsiveInnerSpan>
            </ResponsiveSpan>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Style</span>
               <ResponsiveInnerSpan>CV-TS9865</ResponsiveInnerSpan>
            </ResponsiveSpan>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Ideal</span>
               <ResponsiveInnerSpan>All</ResponsiveInnerSpan>
            </ResponsiveSpan>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Size</span>
               <ResponsiveInnerSpan>Free</ResponsiveInnerSpan>
            </ResponsiveSpan>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Pattern</span>
               <ResponsiveInnerSpan>Printed</ResponsiveInnerSpan>
            </ResponsiveSpan>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Reversible</span>
               <ResponsiveInnerSpan>No</ResponsiveInnerSpan>
            </ResponsiveSpan>
            <ResponsiveSpan>
               <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>Secondary Color</span>
               <ResponsiveInnerSpan>Black, Brown</ResponsiveInnerSpan>
            </ResponsiveSpan>
         </UL>
      </span>
   );
};

export default ProductCardTabData;