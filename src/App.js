import { useContext, createContext, useState, useMemo } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'

import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  Paper,
  useTheme
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import './app.css'

import UserManager from './components/UserManager'

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function App () {
  const [cookies, setCookie] = useCookies(['theme-mode'])
  const [mode, setMode] = useState(
    cookies['theme-mode'] === 'dark' ? 'dark' : 'light'
  )

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => {
          const newMode = prevMode === 'light' ? 'dark' : 'light'
          setCookie('theme-mode', newMode, { path: '/' })
          return newMode
        })
      }
    }),
    [setCookie]
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContainer />
        </ThemeProvider>
      </CookiesProvider>
    </ColorModeContext.Provider>
  )
}

function AppContainer () {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Container maxWidth={false}>
      <Paper square>
        <AppBar position='static'>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant='h4' noWrap>
              User Manager
            </Typography>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color='inherit'
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
        <UserManager />
      </Paper>
    </Container>
  )
}
