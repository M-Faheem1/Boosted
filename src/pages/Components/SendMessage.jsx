import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Grid, ListItemIcon } from '@mui/material';

function SendMessage({ message, time, listItemSvg }) {
	return (
		<ListItem>
			<Grid container sx={{ display: 'flex', width: '100%' }} className='center-align'>
				<Grid>
					<Grid className='center-align'>
						<ListItemIcon>{listItemSvg}</ListItemIcon>
						<ListItemText className='message left-message' align='left' primary={message}></ListItemText>
					</Grid>
					<Grid item xs={12}>
						<ListItemText align='left' secondary={time}></ListItemText>
					</Grid>
				</Grid>
			</Grid>
		</ListItem>
	);
}

export default SendMessage;
