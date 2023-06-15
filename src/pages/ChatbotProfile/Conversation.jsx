import * as React from 'react';
import { Box } from '@mui/system';
import ConversationList from '../Components/ConversationList';
import ChatSection from '../Components/ChatSection';

const Conversation = () => {
	return (
		<Box sx={{ marginTop: '40px', border: '1px solid #E1E2FF', display: 'flex', boxSizing: 'border-box' }}>
			<ConversationList heading={'Chats'} />
			<ChatSection heading={'Suporte ADMIN'} subHeading={'Online'} />
		</Box>
	);
};

export default Conversation;