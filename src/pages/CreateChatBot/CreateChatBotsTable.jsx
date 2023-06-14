import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Typography } from '@mui/material';
import { border, padding } from '@mui/system';

const columns = [
	{ field: 'id', headerName: 'Links', width: '50%', sortable: false },

	{
		field: 'characterCount',
		headerName: 'Character Count',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: '50%',
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
			style={{ height: '656px', width: '100%', border: '1px solid rgba(0, 0, 0, 0.2)' }}
			sx={{ marginTop: '40px', padding: '16px 16px 0' }}
		>
			<Typography sx={{ fontSize: '24px', fontWeight: '500', lineHeight: '36px', padding: '22px 16px' }}>
				WEBSITE URLs
			</Typography>
			<style>
				{`
        .MuiDataGrid-columnHeaderCheckbox, MuiDataGrid-columnHeaderDraggableContainer, .MuiDataGrid-cellCheckbox {
          width: 18px !important;
          min-width: unset !important;
          height: 18px !important;
          min-height:unset !important;
          top:20px;
        }
        span {
          width: 18px !important;
          height: 18px !important; 
          padding:0 !important;
        }
        .MuiDataGrid-cell--withRenderer {
          position: relative !important;
        }

        .MuiDataGrid-columnSeparator {
          display: none;
          width:0;
        }
        .MuiDataGrid-columnHeaderTitle {
          text-overflow: unset;
        }
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
				sx={{
					boxShadow: 'none',
					border: 'none',
					'& .MuiDataGrid-cell:hover': {
						color: 'primary.main',
					},
				}}
			/>
		</Grid>
	);
}
