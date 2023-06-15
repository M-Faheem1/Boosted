import * as React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Grid, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SvgProfilePicSvg from '../../assets/svgs/components/profile-pic-svg';
import ConversationList from '../Components/ConversationList';

function SendMessage({message,time,listItemSvg}) {
	return (
		<ListItem>
			<Grid container sx={{ display: 'flex', width: '100%' }} className='center-align'>
				<Grid>
					<Grid className='center-align'>
						<ListItemIcon>
            {listItemSvg}
						</ListItemIcon>
						<ListItemText
							className='message left-message'
							align='left'
							primary={message}
						></ListItemText>
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
