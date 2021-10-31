import { useEffect, useState } from 'react'

import { Divider, Typography, Box, Avatar } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import { getUsers } from '../services/reqresApi'

const SIMPLE_COLUMN_CONFIG = {
  disableColumnMenu: true,
  disableReorder: true,
  filterable: false,
  hideSortIcons: true,
  sortable: false
}

const fullNameValueGetter = params =>
  `${params.row.firstName} ${params.row.lastName}`

const avatarUrlColumnToImage = params => {
  const src = params.row.avatar
  const alt = `Avatar for ${fullNameValueGetter(params)}`

  return <Avatar alt={alt} src={src} />
}

const UserManager = () => {
  const [selectedPage, setSelectedPage] = useState(1)
  const [paginatedUsers, setPaginatedUsers] = useState()

  // Fetch the users
  useEffect(() => {
    const fetchUsers = async () => {
      setPaginatedUsers(await getUsers({ selectedPage }))
    }

    fetchUsers()
  }, [selectedPage])

  return (
    <Box sx={{ textAlign: 'center', pt: '32px' }}>
      <Typography variant='h4'>Users</Typography>
      <Box sx={{ height: 425 }}>
        <DataGrid
          columns={[
            {
              field: 'avatar',
              headerName: 'Avatar',
              renderHeader: () => <></>,
              width: 60,
              renderCell: avatarUrlColumnToImage,
              ...SIMPLE_COLUMN_CONFIG
            },
            {
              field: 'fullName',
              headerName: 'Name',
              valueGetter: params =>
                `${params.row.firstName} ${params.row.lastName}`,
              width: 350,
              ...SIMPLE_COLUMN_CONFIG
            },
            {
              field: 'email',
              headerName: 'Email',
              width: 350,
              ...SIMPLE_COLUMN_CONFIG
            }
          ]}
          rows={paginatedUsers?.users || []}
          pageSize={paginatedUsers?.perPage}
          rowsPerPageOptions={[paginatedUsers?.perPage]}
        />
        <Divider />
      </Box>
    </Box>
  )
}

export default UserManager
