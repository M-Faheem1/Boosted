import React from 'react';
import { Grid, Typography } from '@mui/material';
import ChatBotsListTable from './ChatBotsListTable';

function MyChatBots() {
	return (
		<Grid>
			<Typography sx={{ fontSize: '36px', fontWeight: '700', lineHeight: '54px' }} variant='h1'>
				My Chatbots
			</Typography>
			<ChatBotsListTable />
		</Grid>
	);
}

export default MyChatBots;
