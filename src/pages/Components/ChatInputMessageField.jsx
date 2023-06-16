import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SvgMessageSendSvg from '../../assets/svgs/components/message-send-svg';
import { borderColor } from '@mui/system';

function ChatInputMessageField() {
	const handleMessageSend = () => {
		// Handle sending message logic here
	};

	return (
		<TextField
			fullWidth
			variant='outlined'
			placeholder='Type here'
			InputProps={{
				disableUnderline: true,

				endAdornment: (
					<InputAdornment position='end'>
						<IconButton onClick={handleMessageSend}>
							<SvgMessageSendSvg />
						</IconButton>
					</InputAdornment>
				),
			}}
			sx={{
				'.MuiInputBase-root': {
					padding: 0,
					margin: '0 24px',
					width: '836px',
					boxShadow: 'none',
					'&:hover': {
						outline: 'none',
					},
					'.MuiInputBase-input': {
						padding: '16px 26px 18px',
					},
					'&.Mui-focused': {
						'& .MuiOutlinedInput-notchedOutline': {
							border: '2px solid #E5E6E9',
						},
					},
					'.MuiButtonBase-root': {
						position: 'relative',
						padding: '16px 25px 17px 21px',
						'&:before': {
							position: 'absolute',
							content: '""',
							height: '37.5px',
							width: '1px',
							backgroundColor: '#E5E6E9',
							right: '65px',
						},
					},
				},
			}}
		/>
	);
}

export default ChatInputMessageField;
