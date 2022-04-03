import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const HomeChart = (props) => {
	const darkMode = useSelector(state => state.ui.darkMode);

	return (
		<Card elevation={0} sx={{ width: '100%', height: '100%', padding: '10px 0 0 0' }}>
			<CardContent>
				<Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>Total Expense</Typography>
			</CardContent>
			<CardContent sx={{ width: 'inherit', height: 'inherit', display: 'flex', alignItems: 'center' }}>
				<ResponsiveContainer width="99%" height={500} >
					<AreaChart
						width={500}
						height={300}
						data={props.data}
						margin={{
							right: 5,
							left: 5,
							bottom: 30
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip contentStyle={{ color: '#222' }} />
						<Area type="monotone" dataKey="uv" stroke={darkMode ? '#607d8b' : "#8884d8"} fill={darkMode ? '#607d8b' : "#8884d8"} />
						<Area type="monotone" dataKey="pv" stackId="1" stroke={darkMode ? '#546e7a' : "#82ca9d"} fill={darkMode ? '#607d8b' : "#82ca9d"} />
					</AreaChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}

export default HomeChart;
