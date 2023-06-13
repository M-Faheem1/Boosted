import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomButton from './CustomButton';
import SvgBotSvg from '../../assets/svgs/components/bot-svg';
import SvgModalCloseSvg from '../../assets/svgs/components/modal-close-svg';
import { Grid } from '@mui/material';

export default function TransitionsModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: '632px',
							bgcolor: '#FFFFFF',
							border: '2px solid #000',
							padding: '20px 40px',
							textAlign: 'center',
							borderRadius: '4px',
							height: '400px',
							'&:focus-visible': {
								outline: 'none',
							},
						}}
					>
						<Grid className='modal-header' sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2px' }}>
							<SvgModalCloseSvg onClick={handleClose} />
						</Grid>
						<Grid className='modal-body'>
							<SvgBotSvg />
							<Typography
								id='transition-modal-title'
								variant='h6'
								component='h2'
								sx={{
									fontWeight: '700',
									fontSize: '24px',
									lineHeight: '24px',
									mt: 3,
								}}
							>
								Plan consumed
							</Typography>
							<Typography
								id='transition-modal-description'
								sx={{
									margin: '16px auto 0',
									maxWidth: '528px',
									fontSize: '14px',
									fontWeight: '400',
									lineHeight: '24px',
								}}
							>
								You can’t create more chatbots because your plan is consumed completely. If you want to create more
								chatbots purchase premium plans now.
							</Typography>
							<Grid sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
								<CustomButton text={'Purchase plan'} />
							</Grid>
						</Grid>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
