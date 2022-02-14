import { Button, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { routes } from '../../routing'

function Authenticated () {
  const [loading, setLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!window.sessionStorage.getItem('isLoggedIn')
  )

  const handleLogout = () => {
    setLoading(true)

    setTimeout(() => {
      setIsLoggedIn(false)

      window.sessionStorage.removeItem('isLoggedIn')
      setLoading(false)
    }, 1500)
  }

  return (
    <>
      {!isLoggedIn && <Navigate replace to={routes.LOGIN.to} />}
      <Outlet />

      <Button
        sx={{ mt: 5 }}
        onClick={handleLogout}
        disabled={loading}
        data-cy='logout-button'
      >
        {loading ? <CircularProgress size={25} /> : 'Log Out'}
      </Button>
    </>
  )
}

export default Authenticated
