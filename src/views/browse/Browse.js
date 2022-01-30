import { Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

function Browse () {
  return (
    <>
      <Typography variant='h6'>Browse</Typography>
      <Outlet />
    </>
  )
}

export default Browse
