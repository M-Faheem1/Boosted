import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { border, fontSize } from '@mui/system';
import SvgAddSvg from '../../assets/svgs/components/add-svg';
import { Icon } from '@mui/material';

export default function CustomButton({ text, Icon }) {
	return (
		<Stack direction='row' spacing={2}>
			<Button
				sx={{
					backgroundColor: '#5532FA',
					borderRadius: '4px',
					padding: '12px 16px',
					fontSize: '14px',
					fontWeight: '500',
					lineHeight: '24px',
					boxShadow:
						'0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);',
					border: 'transparent',
					'&:focus': {
						outline: 'none',
						backgroundColor: '#5532FA',
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
