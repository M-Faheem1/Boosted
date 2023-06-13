import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CustomButton({ text, Icon, style }) {
	return (
		<Stack direction='row' spacing={2}>
			<Button
				style={style}
				sx={{
					backgroundColor: '#5532FA',
					borderRadius: '4px',
					padding: '12px 16px',
					fontSize: '14px',
					fontWeight: '500',
					lineHeight: '24px',
					boxShadow:
						'0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);',
					borderColor: 'transparent',
					'&:focus': {
						outline: 'none',
						backgroundColor: '#5532FA',
					},
					'&:hover': {
						borderColor: 'transparent',
					},
				}}
				variant='contained'
				startIcon={Icon}
			>
				{text}
			</Button>
		</Stack>
	);
}
