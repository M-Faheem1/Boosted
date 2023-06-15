import { Grid } from '@mui/material';
import React from 'react';
import CraeteChatBotsTable from '../CreateChatBot/CreateChatBotsTable';
import CustomButton from '../../common/components/CustomButton';
import { Box } from '@mui/system';

function RelevantLinks() {
	return (
		<Box>
			<CraeteChatBotsTable />
			<Grid sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
				<CustomButton text={'Save changes'} />
			</Grid>
		</Box>
	);
}

export default RelevantLinks;
