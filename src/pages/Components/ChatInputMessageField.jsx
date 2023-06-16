import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SvgMessageSendSvg from '../../assets/svgs/components/message-send-svg';

function ChatInputMessageField() {
	const handleMessageSend = () => {
		// Handle sending message logic here
	};

	return (
		<div>
			<TextField
				fullWidth
				variant='outlined'
				placeholder='Type here'
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton onClick={handleMessageSend}>
								<SvgMessageSendSvg />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
}

export default ChatInputMessageField;
