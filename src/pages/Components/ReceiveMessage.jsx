import * as React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Grid, ListItemButton, ListItemIcon, Typography } from '@mui/material';

function ReceiveMessage({ message, time, listItemSvg }) {
	return (
		<ListItem>
			<Grid container sx={{ display: 'flex', width: '100%' }} className='flex-end'>
				<Grid sx={{}}>
					<Grid item xs={12} className='center-align'>
						<ListItemText className='message right-message' align='' primary={message}></ListItemText>
						<ListItemIcon>{listItemSvg}</ListItemIcon>
					</Grid>
					<Grid item xs={12}>
						<ListItemText align='right' secondary={time}></ListItemText>
					</Grid>
				</Grid>
			</Grid>
		</ListItem>
	);
}

export default ReceiveMessage;
