import {
  Alert,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { routes } from '../../routing'

function Login () {
  const [loading, setLoading] = useState(false)
  const [showLoginError, setShowLoginError] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!window.sessionStorage.getItem('isLoggedIn')
  )

  const handleLogin = event => {
    event.preventDefault()

    const { username, password } = event.target

    if (username.value !== '' && password.value !== '') {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)

        window.sessionStorage.setItem('isLoggedIn', true)
        setIsLoggedIn(true)
      }, 1500)
    } else {
      setShowLoginError(true)
    }
  }

  return (
    <>
      {isLoggedIn && <Navigate replace to={routes.AUTHENTICATED.to} />}
      <Container sx={{ maxWidth: 'sm' }}>
        <Typography variant='h5' gutterBottom>
          Please log in to Continue
        </Typography>
        <form onSubmit={handleLogin}>
          <Stack spacing={4}>
            <FormControl>
              <InputLabel htmlFor='username'>
                Username or Email Address
              </InputLabel>
              <Input id='username' name='username' autoComplete='username' />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
              />
            </FormControl>
            <Button variant='contained' type='submit' disabled={loading}>
              {loading ? <CircularProgress size={25} /> : 'Log In'}
            </Button>
          </Stack>
        </form>
        {showLoginError && (
          <Alert
            severity='error'
            onClose={() => {
              setShowLoginError(false)
            }}
            sx={{ mt: 2 }}
          >
            Please enter a valid username and password
          </Alert>
        )}
      </Container>
    </>
  )
}

export default Login
