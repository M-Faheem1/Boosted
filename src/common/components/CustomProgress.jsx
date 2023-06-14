import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, Typography } from '@mui/material';

export default function CustomProgress({ dataFetching }) {
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
		}, 800);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Grid
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '32px',
			}}
		>
			<CircularProgress variant='determinate' value={progress} thickness='4' size='68px' />
			<Typography>{dataFetching}</Typography>
		</Grid>
	);
}
