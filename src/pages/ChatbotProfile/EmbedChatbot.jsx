// import { Button } from '@mui/base';
// import React from 'react';
// import CopyToClipboard from 'react-copy-to-clipboard';

// function EmbedChatbot() {
// 	return (
// 		<textarea
// 			style={{
// 				height: '500px',
// 				border: '1px solid black',
// 			}}
// 		>
// 			<CopyToClipboard text='Text to be copied'>
// 				<Button variant='contained'>Copy to Clipboard</Button>
// 			</CopyToClipboard>
// 		</textarea>
// 	);
// }

// export default EmbedChatbot;

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, TextField, Box } from '@mui/material';

function EmbedChatbot() {
	const [text, setText] = useState('');
	const [isCopied, setIsCopied] = useState(false);

	const handleTextChange = (event) => {
		setText(event.target.value);
		setIsCopied(false);
	};

	const handleCopy = () => {
		setIsCopied(true);
	};

	return (
		<Box>
			<TextField multiline rows={4} variant='outlined' value={text} onChange={handleTextChange} label='Enter text' />
			<Box mt={2}>
				<CopyToClipboard text={text} onCopy={handleCopy}>
					<Button variant='contained'>{isCopied ? 'Copied!' : 'Copy to Clipboard'}</Button>
				</CopyToClipboard>
			</Box>
		</Box>
	);
}

export default EmbedChatbot;
