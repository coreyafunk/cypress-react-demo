import { Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

function Browse () {
  return (
    <>
      <Typography variant='h5' gutterBottom>
        Browse
      </Typography>
      <Outlet />
    </>
  )
}

export default Browse
