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

import { ReactComponent as LightIcon } from '../../resources/vectors/lightside.svg'
import { ReactComponent as DarkIcon } from '../../resources/vectors/darkside.svg'
import tieAdvancedFighter from '../../resources/images/tie_advanced_fighter.png'
import { ColorModeContext } from '../../App'
import AppContent from '../../views/appContent/AppContent'
import { Link } from 'react-router-dom'
import { routes } from '../../routing'

function AppContainer () {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const isDarkMode = theme.palette.mode === 'dark'

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
              sx={{
                ml: 1,
                width: '40px',
                height: '40px',
                fill: isDarkMode ? 'black' : 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }}
              onClick={colorMode.toggleColorMode}
              color='inherit'
            >
              {isDarkMode ? <DarkIcon /> : <LightIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <AppContent />
      </Paper>
    </Container>
  )
}

export default AppContainer
