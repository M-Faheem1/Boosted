import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
	return (
		<FormControl>
			<FormLabel
				id='demo-row-radio-buttons-group-label'
				sx={{
					fontSize: '12px',
					fontWeight: '400',
					lineHeight: '16px',
					color: '#49454F !important',
				}}
			>
				Position On Site
			</FormLabel>
			<RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
				<FormControlLabel value='Left' control={<Radio />} label='Left' />
				<FormControlLabel value='Right' control={<Radio />} label='Right' />
			</RadioGroup>
		</FormControl>
	);
}
