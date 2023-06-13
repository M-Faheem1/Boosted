import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Divider, Grid, Typography } from '@mui/material';
import SvgLogOutSvg from '../assets/svgs/components/log-out-svg';
import NavLinks from './NavLinks';

const drawerWidth = 248;

export default function Sidebar() {
	return (
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						background: 'linear-gradient(180deg, #160042 0%, #1A162D 100%)',
						color: '#ffff',
					},
				}}
				variant='permanent'
				anchor='left'
			>
				<Toolbar
					sx={{
						minHeight: 'unset !important',
						display: 'flex',
						justifyContent: 'center',
						padding: '0 !important',
						marginTop: '40px',
					}}
				>
					<Typography component='div'>
						<img src={'/public/images/Booosted-2 1.png'} alt='Logo' style={{ height: '27px' }} />
					</Typography>
				</Toolbar>
				<NavLinks />
				<Grid
					sx={{
						margin: 'auto 0 0',
					}}
				>
					<Divider
						sx={{
							border: '1px solid #3A344F',
						}}
					/>
					<Grid
						sx={{
							display: 'flex',
							gap: '16px',
							alignItems: 'center',
							padding: '40px 32px 86px',
						}}
					>
						<SvgLogOutSvg />
						<Typography variant='span'>Logout</Typography>
					</Grid>
				</Grid>
			</Drawer>
	);
}
