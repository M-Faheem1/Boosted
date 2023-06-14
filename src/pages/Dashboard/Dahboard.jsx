import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../../layout/Sidebar';
import MyChatBots from '../MyChatBots/MyChatBots';
import SvgProfilePicSvg from '../../assets/svgs/components/profile-pic-svg';
import { Grid } from '@mui/material';
import CreateChatBot from '../CreateChatBot/CreateChatBot';
import BasicTabs from '../ChatbotProfile/ChatbotProfile';

export default function Dashboard() {
	return (
		<Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
			<Sidebar />
			<Box
				component='main'
				sx={{
					width: '100%',
					padding: '36px 60px 36px 52px',
				}}
			>
				<Grid
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						gap: '16px',
					}}
				>
					<SvgProfilePicSvg /> <span>Alex Higgins</span>{' '}
				</Grid>
				{/* <MyChatBots /> */}
				{/* <CreateChatBot /> */}
				<BasicTabs />
			</Box>
		</Box>
	);
}
