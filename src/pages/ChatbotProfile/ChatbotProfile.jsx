import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SvgPreviousPageSvg from '../../assets/svgs/components/previous-page-svg';
import { Grid } from '@mui/material';
import ChatbotSettings from './ChatbotSettings';
import RelevantLinks from './RelevantLinks';
import Conversation from './Conversation';
import EmbededChatbox from './EmbededChatbox';
import ChatSection from '../Components/ChatSection';
import SvgChatCloseSvg from '../../assets/svgs/components/chat-close-svg';
import ChatInputMessageField from '../Components/ChatInputMessageField';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Grid
				sx={{
					'.tabpanel .MuiBox-root': {
						padding: 0,
					},
				}}
			>
				<Grid sx={{ display: 'flex', alignItems: 'center', gap: '31px' }}>
					<SvgPreviousPageSvg />
					<Typography sx={{ fontSize: '36px', fontWeight: '700', lineHeight: '54px' }} variant='h1'>
						COGENTLABS.CO
					</Typography>
				</Grid>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'divider',
						marginTop: '55px',
						width: 'fit-content',
						' .Mui-selected ': { color: '#000000 !important', outline: 'none' },
						'.MuiTab-textColorPrimary': { color: '#49454F' },
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'
						sx={{
							'.MuiTabs-indicator': {
								backgroundColor: '#5532FA !important',
							},
						}}
					>
						<Tab
							disableRipple
							label='Settings'
							{...a11yProps(0)}
							sx={{
								fontWeight: 500,
								fontSize: '14px',
								lineHeight: '20px',
							}}
						/>
						<Tab disableRipple label='Relevant Links' {...a11yProps(1)} />
						<Tab disableRipple label='Refresh Website Content' {...a11yProps(2)} />
						<Tab disableRipple label='Embed Chatbot' {...a11yProps(3)} />
						<Tab disableRipple label='View Conversation' {...a11yProps(4)} />
						<Tab disableRipple label='Chat' {...a11yProps(5)} />
					</Tabs>
				</Box>
				<TabPanel className='tabpanel' value={value} index={0} sx={{}}>
					<ChatbotSettings />
				</TabPanel>
				<TabPanel className='tabpanel' value={value} index={1}>
					<RelevantLinks />
				</TabPanel>
				<TabPanel className='tabpanel' value={value} index={2}></TabPanel>
				<TabPanel value={value} index={3}>
					<EmbededChatbox />
				</TabPanel>
				<TabPanel className='tabpanel' value={value} index={4}>
					<Conversation />
				</TabPanel>
				<TabPanel className='tabpanel' value={value} index={5}>
					<ChatSection
						heading={'Chatbot'}
						chatclosesvg={<SvgChatCloseSvg />}
						chatInputField={<ChatInputMessageField />}
						style={{ marginTop: '60px',paddingBottom:'30px' }}
						listStyle={{ paddingBottom: '44px' }}
					/>
				</TabPanel>
			</Grid>
		</Box>
	);
}
