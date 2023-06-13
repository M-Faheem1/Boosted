import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SvgDeleteSvg from '../../assets/svgs/components/delete-svg';
import SvgAvatarSvg from '../../assets/svgs/components/avatar-svg';
import { Grid, Typography } from '@mui/material';
import CustomButton from '../../common/components/CustomButton';
import TransitionsModal from '../../common/components/CustomModal';
import SvgAddSvg from '../../assets/svgs/components/add-svg';

function createData(name, email, lastScene, conversation, action) {
	return { name, email, lastScene, conversation, action };
}

const rows = [
	createData('Alex', 'booosted@gamil.com', '15 minutes ago', 7),
	createData('Ronnie', 'booosted@gamil.com', '2 hours ago', 12),
	createData('Shakira', 'booosted@gamil.com', '8 hours ago', 32),
	createData('Robert Downey Jr.', 'booosted@gamil.com', '5 hours ago', 4),
	createData('Max', 'booosted@gamil.com', '2 minutes ago', 156),
];

export default function DashboardTable() {
	return (
		<TableContainer
			sx={{
				width: '1046px !important',
				marginTop: '4.125rem',
				boxShadow: 'none',
				border: '.0625rem solid rgba(0, 0, 0, 0.2)',
				borderRadius: '.25rem',
				padding: '1rem',
			}}
			component={Paper}
		>
			<Grid
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 16px 30px' }}
			>
				<Typography variant='h2' sx={{ fontSize: '1.5rem', fontWeight: '500' }}>
					LIST OF CHATBOTS
				</Typography>
				<CustomButton text={'create chatbot'} Icon={<SvgAddSvg />} />
			</Grid>
			<Table aria-label='simple table'>
				<TableHead
					sx={{
						borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
						fontSize: '14px',
						fontWeight: '500',
						lineHeight: '24px',
					}}
				>
					<TableRow
						sx={{
							fontSize: '14px',
							fontWeight: '400',
							lineHeight: '20px',
							padding: '0 16px',
						}}
					>
						<TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', padding: '16px 16px 16px 30px' }}>
							Name
						</TableCell>
						<TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Support Email</TableCell>
						<TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Last Message Sent</TableCell>
						<TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Conversations</TableCell>
						<TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name} sx={{ padding: '0 16px' }}>
							<TableCell
								component='th'
								scope='row'
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
									borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
									padding: '16px 16px 16px 30px',
								}}
							>
								<SvgAvatarSvg />
								{row.name}
							</TableCell>
							<TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>{row.email}</TableCell>
							<TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>{row.lastScene}</TableCell>
							<TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>{row.conversation}</TableCell>
							<TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
								<SvgDeleteSvg />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TransitionsModal />
		</TableContainer>
	);
}
