import { createContext, useState, useMemo } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import './app.css'

import { Router } from './routing'
import AppContainer from './components/appContainer/AppContainer'

const ColorModeContext = createContext({ toggleColorMode: () => {} })

function App () {
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
          <Router>
            <AppContainer />
          </Router>
        </ThemeProvider>
      </CookiesProvider>
    </ColorModeContext.Provider>
  )
}

export default App
export { ColorModeContext }
