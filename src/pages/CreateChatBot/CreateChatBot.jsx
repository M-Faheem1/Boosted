import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import CustomButton from '../../common/components/CustomButton';
import SvgPreviousPageSvg from '../../assets/svgs/components/previous-page-svg';
import CustomizedInputsStyleOverrides from '../../common/components/InputField';
import SvgCreateChatBotsSvg from '../../assets/svgs/components/create-chat-bots-svg';
import CustomProgress from '../../common/components/CustomProgress';
import CraeteChatBotsTable from './CreateChatBotsTable';

function CreateChatBot() {
	return (
		<Grid>
			<Grid sx={{ display: 'flex', alignItems: 'center', gap: '31px' }}>
				<SvgPreviousPageSvg />
				<Typography sx={{ fontSize: '36px', fontWeight: '700', lineHeight: '54px' }} variant='h1'>
					CREATE CHATBOTS
				</Typography>
			</Grid>
			<Grid className='input-wrapper' sx={{ display: 'flex', gap: '24px', marginTop: '56px' }}>
				<CustomizedInputsStyleOverrides />
				<CustomButton
					text={'fetch links'}
					style={{
						whiteSpace: 'nowrap',
						width: '160px',
						fontSize: '15px',
						fontWeight: '400',
						lineHeight: '26px',
						backgroundColor: '#5532FA',
						boxShadow: 'none',
						'&:focus': {
							outline: 'none',
							backgroundColor: '#5532FA',
						},
					}}
				/>
			</Grid>
			{/* <Grid
				sx={{
					marginTop: '148px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '18px',
				}}
			>
				<SvgCreateChatBotsSvg />
				<Typography variant='span' sx={{ fontSize: '21px', fontWeight: '400', lineHeight: '22px' }}>
					Enter Your URL and Get Started!
				</Typography>
			</Grid> */}
			{/* <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'282px' }}>
				<CustomProgress 
        dataFetching={'Fetching Links'}
        />
			</Grid> */}
			<CraeteChatBotsTable />
			<Grid sx={{display:'flex', justifyContent:'flex-end',alignItems:'center', gap:'24px', marginTop:'23px'}} >
				<Typography variant='body1' sx={{fontSize:'16px',fontWeight:'400',lineHeight:'18px', color:'#676767'}}>You have used <Typography variant='span' sx={{color:'#5532FA',fontSize:'18px',fontWeight:'700',lineHeight:'20px',}}>38,925</Typography> character counts</Typography>
        <CustomButton 
        text={'Create chatbot'}
        />
			</Grid>
		</Grid>
	);
}

export default CreateChatBot;
