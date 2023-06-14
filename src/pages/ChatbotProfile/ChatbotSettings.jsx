import { Box, FormControl, FormHelperText, Grid, InputLabel, Typography } from '@mui/material';
import * as React from 'react';
import CustomizedInputsStyleOverrides from '../../common/components/InputField';
import RowRadioButtonsGroup from '../../common/components/CustomRadio';
import CustomButton from '../../common/components/CustomButton';
import { fontSize } from '@mui/system';

function ChatbotSettings() {
	return (
		<Box sx={{ maxWidth: '528px' }}>
			<Grid sx={{ marginTop:'40px !important'}}>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: '24px',
						lineHeight: '26px',
					}}
				>
					Overview
				</Typography>
				<Grid sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px', gap: '24px' }}>
					<FormControl className='nks' sx={{}}>
						<CustomizedInputsStyleOverrides
							label={'name'}
							placeholder={'cogentlabs.co'}
							style={{
								width: '528px',
							}}
						/>
					</FormControl>
					<FormControl sx={{}}>
						<CustomizedInputsStyleOverrides
							label={'Domains'}
							placeholder={'Domain.com'}
							style={{
								width: '528px',
							}}
						/>
					</FormControl>
					<FormControl sx={{}}>
						<CustomizedInputsStyleOverrides
							label={'Support Email'}
							placeholder={'booosted@gmail.com'}
							style={{
								width: '528px',
							}}
						/>
					</FormControl>
				</Grid>
			</Grid>
			<Grid sx={{ marginTop: '50px' }}>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: '24px',
						lineHeight: '26px',
					}}
				>
					THEME SETTINGS
				</Typography>
				<Grid sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px', gap: '24px' }}>
					<FormControl className='nks' sx={{}}>
						<CustomizedInputsStyleOverrides
							label={'Welcome Message'}
							placeholder={'Hi. I am Alex.'}
							style={{
								width: '528px',
							}}
						/>
					</FormControl>
					<FormControl sx={{}}>
						<CustomizedInputsStyleOverrides
							label={'Chatbot Profile Picture'}
							placeholder={'avtar.png'}
							style={{
								width: '528px',
							}}
						/>
						<CustomButton
							text={'Upload'}
							style={{
								position: 'absolute',
								right: '10px',
								top: '50%',
								transform: 'translateY(-50%)',
                padding:'3px 22px',
                fontSize:'15px',
                fontWeight:'500',
                lineHeight:'26px',
                width:'104px',
							}}
						/>
					</FormControl>
					<FormControl sx={{}}>
						<CustomizedInputsStyleOverrides
							label={'Chatbot Name'}
							placeholder={'Alex'}
							style={{
								width: '528px',
							}}
						/>
					</FormControl>
					<FormControl sx={{}}>
						<RowRadioButtonsGroup />
					</FormControl>
				</Grid>
			</Grid>
			<Grid sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<CustomButton text={'Save changes'} />
			</Grid>
		</Box>
	);
}

export default ChatbotSettings;
