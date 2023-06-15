import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';

function ConversationListItem({ name, time }) {
	return (
		<>
			<ListItemButton disableRipple>
				<ListItem>
					<ListItemText primary={name} secondary={time} />
				</ListItem>
			</ListItemButton>
			<Divider />
		</>
	);
}

export default ConversationListItem;
