import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import CustomButton from '../../common/components/CustomButton';
import SvgPreviousPageSvg from '../../assets/svgs/components/previous-page-svg';
import CustomizedInputsStyleOverrides from '../../common/components/InputField';

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
				{/* <TextField id='outlined-basic' label='Add website URL' variant='outlined' sx={{ width: '100%' }} /> */}
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
		</Grid>
	);
}

export default CreateChatBot;
