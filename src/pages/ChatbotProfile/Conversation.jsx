import * as React from 'react';
import { Box } from '@mui/system';
import ConversationList from '../Components/ConversationList';
import ChatSection from '../Components/ChatSection';

const Conversation = () => {
	return (
		<Box sx={{ marginTop: '40px', display: 'flex', boxSizing: 'border-box' }}>
			<ConversationList heading={'Chats'} />
			<ChatSection heading={'Suporte ADMIN'} subHeading={'Online'} headingFontWeight='700' />
		</Box>
	);
};

export default Conversation;
