import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import SvgChatbotSvg from '../assets/svgs/components/chatbot-svg';
import SvgMembershipSvg from '../assets/svgs/components/membership-svg';

function NavLinks() {
	return (
		<List
			sx={{
				padding: '0 16px',
				marginTop: '81px',
			}}
		>
			{['My Chatbots', 'Memberships'].map((text, index) => (
				<ListItem key={text} disablePadding>
					<ListItemButton
						sx={{
							fontSize:'16px',
							fontWeight:'400',
							lineHeight:'24px',
							padding: '12px 16px',
							'&:focus': {
								backgroundColor: '#5532FA',
								borderRadius: '4px',
							},
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: '24px',
								display: 'flex',
								justifyContent: 'center',
								marginRight: '16px',
							}}
						>
							{index % 2 === 0 ? <SvgChatbotSvg /> : <SvgMembershipSvg />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
}

export default NavLinks;
