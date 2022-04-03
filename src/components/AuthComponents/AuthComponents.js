import React from 'react';
import { Grid } from '@mui/material';
import img from '../../assets/auth.svg';
import AuthForm from './AuthForm';
import { styled } from '@mui/system';

const Container = styled(Grid)(({ theme }) => ({
	padding: '2rem',
	[theme.breakpoints.up('md')]: {
		minHeight: '100vh'
	},
	[theme.breakpoints.down('md')]: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		rowGap: '2rem',
	},
	[theme.breakpoints.down('sm')]: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		rowGap: '2rem',
		paddingTop: '6rem'
	},
}));

const AuthComponents = () => {
	return (
		<Container container
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: { md: '100vh' }, padding: '2rem' }}
		>
			<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
				<img
					style={{
						height: '100%',
						width: '100%',
						objectFit: 'cover'
					}}
					src={img} alt="Profile"
				/>
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6} xl={6}
				sx={{
					width: '100%',
				}}
			>
				<AuthForm />
			</Grid>
		</Container >
	);
};

export default AuthComponents;