import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SvgCopy from '../../assets/svgs/components/copy';

function EmbededChatbox() {
	const copyToClipboard = () => {
		const codeElement = document.querySelector('code');
		if (codeElement) {
			navigator.clipboard
				.writeText(codeElement.innerText)
				.then(() => {
					console.log('Text copied to clipboard');
				})
				.catch((error) => {
					console.error('Error copying text to clipboard:', error);
				});
		}
	};
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
			<Grid className='header' sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '26px' }}>
					EMBEDED CHATBOT ON WEBSITE
				</Typography>
				<Typography sx={{ fontSize: '16px', fontWeight: 300, lineHeight: '26px' }}>
					To add the chatbot any where on your website, add this to your html code.
				</Typography>
			</Grid>
			<Grid sx={{ width: '528px', border: '4px 4px 0px 0px !important', marginTop: '40px' }}>
				<Grid
					sx={{
						padding: '11px 24px 10px',
						backgroundColor: '#18093A',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						borderRadius: '4px 4px 0 0',
					}}
				>
					<Typography sx={{ color: '#ffffff', fontSize: '16px', fontWeight: 400, lineHeight: '19px' }}>
						Embed On Website
					</Typography>

					<Button
						disableRipple
						onClick={copyToClipboard}
						sx={{
							gap: '6px',
							backgroundColor: 'transparent !important',
							borderRadius: '4px',
							padding: '0',
							fontSize: '11px !important',
							fontWeight: '400 !important',
							lineHeight: '13px !important',
							'&:focus': {
								outline: 'none',
								backgroundColor: 'transparent',
							},
							'&:hover': {
								borderColor: 'transparent',
							},
						}}
						variant='contained'
					>
						<SvgCopy />
						Copy Code
					</Button>
				</Grid>
				<Grid
					sx={{
						boxSizing: 'border-box',
						backgroundColor: '#F7F7FB',
						height: 'auto',
						minHeight: '498px',
						padding: '16px 31px',
						borderRadius: '0 0 4px 4px',
					}}
				>
					<code>
						You can’t create more chatbots because your plan is consumed completely. If you want to create more chatbots
						purchase premium plans now.
					</code>
				</Grid>
			</Grid>
		</Box>
	);
}

export default EmbededChatbox;
