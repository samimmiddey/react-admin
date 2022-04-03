import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const SalesInfo = () => {
	return (
		<Card elevation={0} sx={{ padding: '28px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: '24px' }}>
			<CardContent sx={{ padding: 0 }}>
				<Typography variant='h6' sx={{ fontSize: '16px', color: 'text.disabled' }} gutterBottom>Total Balance
				</Typography>
				<Typography variant='h4' sx={{ fontWeight: 600, color: 'text.primary' }}>$3,787,681.00
				</Typography>
			</CardContent>
			<Divider />
			<CardContent sx={{ padding: 0 }}>
				<Typography variant='h6' sx={{ fontSize: '16px', color: 'text.disabled' }} mb={3}>Available Currency
				</Typography>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: '24px' }}>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
						<div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
							<CircleOutlinedIcon sx={{ fontSize: '18px', color: '#80cbc4' }} />
							<Typography sx={{ fontSize: '14px', color: 'text.secondary', fontWeight: 600 }}>US Dollars</Typography>
						</div>
						<Typography sx={{ fontSize: '14px', color: 'text.disabled' }}>$21,500.00</Typography>
					</div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
						<div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
							<CircleOutlinedIcon sx={{ fontSize: '18px', color: '#ce93d8' }} />
							<Typography sx={{ fontSize: '14px', color: 'text.secondary', fontWeight: 600 }}>Bitcoin</Typography>
						</div>
						<Typography sx={{ fontSize: '14px', color: 'text.disabled' }}>$15,300.00</Typography>
					</div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
						<div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
							<CircleOutlinedIcon sx={{ fontSize: '18px', color: '#f48fb1' }} />
							<Typography sx={{ fontSize: '14px', color: 'text.secondary', fontWeight: 600 }}>XRP Ripple</Typography>
						</div>
						<Typography sx={{ fontSize: '14px', color: 'text.disabled' }}>$1,076.81</Typography>
					</div>
				</div>
			</CardContent>
			<Divider />
			<CardActions>
				<Button size="small">Add Money</Button>
				<Button size="small">Withdraw Funds</Button>
			</CardActions>
		</Card>
	);
}

export default SalesInfo;
