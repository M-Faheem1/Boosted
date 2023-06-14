import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Typography } from '@mui/material';

const columns = [
	{ field: 'id', headerName: 'Links', width: 492, sortable: false, headerClassName: 'header-links-coloumn' },

	{
		field: 'characterCount',
		headerName: 'Character Count',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 500,
		headerClassName: 'header-charactercount-column',
	},
];

const rows = [
	{ id: 'https://cogentlabs.co-1', characterCount: '4325' },
	{ id: 'https://cogentlabs.co-2', characterCount: '4325' },
	{ id: 'https://cogentlabs.co-3', characterCount: '4325' },
	{ id: 'https://cogentlabs.co-4', characterCount: '4325' },
	{ id: 'https://cogentlabs.co-5', characterCount: '4325' },
	{ id: 'https://cogentlabs.co-6', characterCount: '4325' },
	{ id: 'https://cogentlabs.co-7', characterCount: '4325' },
	{ id: 'https://cogentlabs.co-8', characterCount: '4325' },
	{ id: 'https://cogentlabs.co-9', characterCount: '4325' },
];

export default function CraeteChatBotsTable() {
	return (
		<Grid
			style={{ height: '656px', minWidth: '1080px', border: '1px solid rgba(0, 0, 0, 0.2)' }}
			sx={{ marginTop: '40px', padding: '16px 16px 0' }}
		>
			<Typography sx={{ fontSize: '24px', fontWeight: '500', lineHeight: '36px', padding: '22px 16px' }}>
				WEBSITE URLs
			</Typography>
			<style>
				{`
      `}
			</style>
			<DataGrid
				rows={rows}
				columns={columns}
				autoHeight
				hideFooter
				hideFooterPagination
				checkboxSelection
				disableColumnMenu
				className='testtttt'
				sx={{
					boxShadow: 'none',
					border: 'none',
					'& .MuiDataGrid-cell:hover': {
						color: 'inherit',
					},
					'& .MuiDataGrid-cell:focus': {
						outline: 'none !important',
					},
					'MuiDataGrid-columnHeaderTitleContainer:focus': {
						outline: 'none !important',
					},
					'.MuiDataGrid-withBorderColor': {
						borderColor: 'rgba(0, 0, 0, 0.12) !important',
					},
					span: {
						width: '18px !important',
						height: '18px !important',
						padding: '0 !important',
					},
					input: {
						color: '#2196F3 !important',
					},
					'.MuiDataGrid-cell--withRenderer': {
						position: 'relative !important',
					},
					'.MuiDataGrid-withBorderColor': {
						borderColor: 'rgba(0, 0, 0, 0.12) !important',
					},
					'.MuiDataGrid-columnSeparator': {
						display: 'none',
						width: '0',
					},
					'.MuiDataGrid-columnHeaderTitle': {
						textOverflow: 'unset',
					},
					'.header-links-coloumn': {
						padding: '0 12px !important',
						width: '700px',
					},
					'.MuiDataGrid-withBorderColor': {
						borderColor: 'rgba(0, 0, 0, 0.12) !important',
					},
					'.MuiDataGrid-columnHeaderCheckbox,  .MuiDataGrid-cellCheckbox': {
						width: '18px !important',
						minWidth: 'unset !important',
						height: '18px !important',
						minHeight: 'unset !important',
						top: '18px',
						marginLeft: '16px',
					},
					'.Mui-selected': {
						backgroundColor: 'transparent !important',
					},
					'.MuiDataGrid-columnHeader': {
						outline: 'none !important',
					},
					'MuiDataGrid-columnHeaderCheckbox': {
						marginLeft: '16px',
					},
					'.header-charactercount-column .MuiDataGrid-columnHeaderDraggableContainer .MuiDataGrid-columnHeaderTitleContainer':
						{
							display: 'flex !important',
							justifyContent: 'flex-end !important',
						},
					'.MuiDataGrid-virtualScroller .MuiDataGrid-virtualScrollerContent .MuiDataGrid-virtualScrollerRenderZone .MuiDataGrid-row .MuiDataGrid-cell':
						{
							'&:nth-child(3)': {
								display: 'flex !important',
								justifyContent: 'flex-end !important',
								color: 'rgba(0, 0, 0, 0.62)',
								'.MuiDataGrid-cellContent': {
									fontWeight: '400',
									fontSize: '12px',
									lineHeight: '18px',
								},
							},
						},
					'.MuiDataGrid-cell': {
						border: 'none !important',
					},
					'.MuiDataGrid-row': {
						borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
					},
					'.MuiDataGrid-cellContent': {
						fontWeight: '400',
						fontSize: '14px',
						lineHeight: '24px',
					},
				}}
			/>
		</Grid>
	);
}
