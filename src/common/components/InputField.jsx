import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme) =>
	createTheme({
		palette: {
			mode: outerTheme.palette.mode,
		},
		components: {
			MuiTextField: {
				styleOverrides: {
					root: {
						'--TextField-brandBorderColor': '#E0E3E7',
						'--TextField-brandBorderHoverColor': '#B2BAC2',
						'--TextField-brandBorderFocusedColor': '#6F7E8C',
						'& label.Mui-focused': {
							color: '#5532FA',
						},
						'& label': {
							color: '#828282',
						},
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					notchedOutline: {
						borderColor: '#5532FA',
					},
					root: {
						[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
							border: '1px solid #5532FA',
						},
						[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
							border: '1px solid #5532FA',
						},
						'& input': {
							padding: '16px',
						},
					},
				},
			},
		},
	});

export default function CustomizedInputsStyleOverrides() {
	const outerTheme = useTheme();

	return (
		<Box
			sx={{
				display: 'grid',
				width: '100%',
			}}
		>
			<ThemeProvider theme={customTheme(outerTheme)}>
				<TextField label='Add website URL' variant='outlined' sx={{}} />
			</ThemeProvider>
		</Box>
	);
}
