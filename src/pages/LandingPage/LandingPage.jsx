import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../../common/components/CustomButton';
import SvgGoogleLogo from '../../assets/svgs/components/google-logo';

function LandingPage() {
	return (
		<Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
			<img src='/public/images/Boosted.png' style={{ objectFit: 'cover' }} />
			<Grid
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography
					variant='h1'
					sx={{
						fontSize: '48px',
						fontWeight: '400',
						lineHeight: '68px',
						textAlign: 'center',
						span: { fontWeight: '800' },
					}}
				>
					Welcome to <span>booosted</span>
				</Typography>
				<Typography
					variant='body1'
					sx={{
						fontSize: '18px',
						fontWeight: '400',
						lineHeight: '20.7px',
						mt: 1,
						textAlign: 'center',
						span: { fontWeight: '800' },
					}}
				>
					Quickly and securely sign in with your Google account
				</Typography>
				<CustomButton
					Icon={<SvgGoogleLogo />}
					text={'Sign in with google'}
					style={{
						whiteSpace: 'nowrap',
						width: '260px',
						fontSize: '15px',
						fontWeight: '500',
						lineHeight: '26px',
						backgroundColor: 'transparent',
						color: '#666666',
						boxShadow: 'none',
						border: '1px solid #999999',
						padding: '11px 32px',
						marginTop: '40px',
						'&:focus': {
							outline: 'none',
							backgroundColor: 'transparent',
						},
					}}
				/>
			</Grid>
			{/* <Grid sx={{ width: '50%' }}></Grid>
			<Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
				<Typography></Typography>
			</Grid> */}
		</Box>
	);
}

export default LandingPage;
