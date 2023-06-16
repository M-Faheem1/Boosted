import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import SvgProfilePicSvg from '../../assets/svgs/components/profile-pic-svg';
import ReceiveMessage from './ReceiveMessage';
import SendMessage from './SendMessage';

function ChatSection({
	heading,
	subHeading,
	chatclosesvg,
	style,
	listStyle,
	chatInputField,
	headingFontSize,
	headingFontWeight,
}) {
	return (
		<Grid sx={{ width: '100%', border: '1px solid #E1E2FF', borderRadius: '4px' }} style={style}>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					borderBottom: '1px solid #E1E2FF',
					alignItems: 'center',
					padding: '23px 24px',
				}}
			>
				<ListItemText
					primary={heading}
					secondary={subHeading}
					sx={{
						m: 0,
						'.MuiListItemText-primary': {
							fontSize: headingFontSize,
							fontWeight: headingFontWeight,
							lineHeight: '18.8px',
							'.MuiListItemText-secondary': { fontSize: '12px', fontWeight: 400, lineHeight: '14px', mt: '5px' },
						},
					}}
				/>
				{chatclosesvg}
			</Grid>
			<Grid sx={{}}>
				<List
					style={listStyle}
					sx={{
						boxSizing: 'border-box',
						padding: '54px 24px 74px',
						display: 'flex',
						height: '509px',
						overflow: 'auto',
						flexDirection: 'column-reverse',
						'.MuiListItemText-secondary': {
							fontSize: '10px',
							fontWeight: 400,
							lineHeight: '11.75px',
							mt: '10px',
							padding: ' 0 48px',
						},
						'.message': {
							padding: '8px 14px 8px 16px',
							borderRadius: '10px',
							maxWidth: '362px',
							margin: 0,
						},
						'.left-message': {
							backgroundColor: '#E7E7E7',
							border: '1px solid #EDEDED',
						},
						'.right-message': {
							color: '#ffffff',
							backgroundColor: '#5532FA',
						},
						'.center-align': {
							display: 'flex',
							alignItems: 'center',
							gap: '16px',
						},
						'.flex-end': {
							justifyContent: 'flex-end',
						},
						'.MuiListItemIcon-root': {
							minWidth: 'unset',
							borderRadius: '50px !important',
						},
						'.MuiListItem-root': { padding: '0 !important' },
						'.MuiGrid-root .MuiGrid-item': { maxWidth: 'unset !important' },
						'.MuiListItemText-primary': { fontSize: '12px', fontWeight: 400, lineHeight: '20px' },
						'&::-webkit-scrollbar': {
							width: '0', // Set the width of the scrollbar
						},
						'&::-webkit-scrollbar-track': {
							background: 'transparent', // Set the background color of the scrollbar track
						},
						'&::-webkit-scrollbar-thumb': {
							background: 'transparent', // Set the color of the scrollbar thumb
						},
					}}
				>
					<ReceiveMessage
						listItemSvg={<SvgProfilePicSvg />}
						message={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "}
						time={'09:31'}
					/>
					<SendMessage
						listItemSvg={<SvgProfilePicSvg />}
						message={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
						time={'09:31'}
					/>
					<ReceiveMessage
						listItemSvg={<SvgProfilePicSvg />}
						message={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "}
						time={'09:31'}
					/>
					<SendMessage
						listItemSvg={<SvgProfilePicSvg />}
						message={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
						time={'09:31'}
					/>
					<SendMessage
						listItemSvg={<SvgProfilePicSvg />}
						message={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
						time={'09:31'}
					/>
					<SendMessage
						listItemSvg={<SvgProfilePicSvg />}
						message={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
						time={'09:31'}
					/>
					<SendMessage
						listItemSvg={<SvgProfilePicSvg />}
						message={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
						time={'09:31'}
					/>
					<SendMessage
						listItemSvg={<SvgProfilePicSvg />}
						message={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
						time={'09:31'}
					/>
				</List>
				{chatInputField}
			</Grid>
		</Grid>
	);
}

export default ChatSection;
