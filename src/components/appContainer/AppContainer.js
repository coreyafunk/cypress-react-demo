import { useContext } from 'react'
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

import tieAdvancedFighter from '../../resources/images/tie_advanced_fighter.png'
import { ColorModeContext } from '../../App'
import AppContent from '../../views/appContent/AppContent'
import { Link } from 'react-router-dom'
import { routes } from '../../routing'

function AppContainer () {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Container maxWidth='lg' sx={{ pt: 3 }}>
      <Paper square>
        <AppBar position='static'>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                columnGap: '12px'
              }}
            >
              <Link to={routes.HOME.to}>
                <img
                  style={{ maxWidth: '50px' }}
                  src={tieAdvancedFighter}
                  alt='Star ship'
                />
              </Link>
              <Typography variant='h4' noWrap>
                The StarDex
              </Typography>
            </div>

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
