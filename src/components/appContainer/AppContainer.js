import { useContext, useEffect } from 'react'

import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Paper,
  useTheme
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { ColorModeContext } from '../../App'
import AppContent from '../../views/appContent/AppContent'
import useViewState from '../../hooks/useViewState'

function AppContainer () {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const { title, headerTitle } = useViewState()

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Container maxWidth={false}>
      <Paper square>
        <AppBar position='static'>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant='h4' noWrap>
              {headerTitle}
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
        <AppContent />
      </Paper>
    </Container>
  )
}

export default AppContainer
