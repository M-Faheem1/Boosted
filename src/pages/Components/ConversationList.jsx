import * as React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Grid, Typography } from '@mui/material';
import ConversationListItem from './ConversationListItem';

function ConversationList({ heading }) {
	return (
		<Grid
			container
			component={Paper}
			sx={{
				display: 'flex',
				boxShadow: 'none',
				width: '344px !important',
				border: '1px solid #E1E2FF',
				borderRight: 'none',
				borderRadius: '20px 0 0 4px !important',
				'.MuiListItemButton-root': { padding: 0, '& .active': { backgroundColor: '#F1EFF0' } },
				'.MuiListItem-padding': { padding: '24px 44px' },
				'.MuiDivider-root': { borderColor: '#E1E2FF' },
			}}
		>
			<Grid sx={{ width: '344px', height: '600px' }}>
				<Grid
					sx={{
						padding: '25px 54px',
						backgroundColor: '#180B38',
						borderRadius: '4px 0 0 0',
					}}
				>
					<Typography
						sx={{
							color: '#ffffff',
							fontSize: '30px',
							fontWeight: 700,
							lineHeight: '34px',
						}}
					>
						{heading}
					</Typography>
				</Grid>
				<Divider />
				<List
					sx={{
						width: '100%',
						maxWidth: 344,
						height: '516px',
						padding: 0,
						overflowY: 'auto',
						'.MuiListItemText-primary': { fontSize: '14px', fontWeight: 600, lineHeight: '16px' },
						'.MuiListItemText-secondary': {
							fontSize: '12px',
							fontWeight: 400,
							lineHeight: '14px',
							mt: 1,
							color: '#A1A1A1',
						},
						'.MuiListItemText-root': { m: 0 },
						'&::-webkit-scrollbar': {
							width: '0', // Set the width of the scrollbar
						},
						'&::-webkit-scrollbar-track': {
							background: 'transparent', // Set the background color of the scrollbar track
						},
						'&::-webkit-scrollbar-thumb': {
							background: 'transparent', // Set the color of the scrollbar thumb
						},
					}}
				>
					<ConversationListItem name={'Suporte ADMIN'} time={'02/08/23'} />
					<ConversationListItem name={'Suporte ADMIN'} time={'02/08/23'} />
					<ConversationListItem name={'Suporte ADMIN'} time={'02/08/23'} />
					<ConversationListItem name={'Suporte ADMIN'} time={'02/08/23'} />
					<ConversationListItem name={'Suporte ADMIN'} time={'02/08/23'} />
					<ConversationListItem name={'Suporte ADMIN'} time={'02/08/23'} />
					<ConversationListItem name={'Suporte ADMIN'} time={'02/08/23'} />
					<ConversationListItem name={'Suporte ADMIN'} time={'02/08/23'} />
				</List>
			</Grid>
		</Grid>
	);
}

export default ConversationList;
