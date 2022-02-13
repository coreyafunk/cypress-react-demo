import { Routes, Route, Navigate } from 'react-router-dom'
import { Container } from '@mui/material'

import { routes } from '../../routing'
import { Login, Authenticated, Home, Browse, BrowseFilms } from '../'

function AppContent () {
  return (
    <Container
      maxWidth={false}
      sx={{
        py: 3
      }}
    >
      <Routes>
        <Route
          path={routes.LOGIN.pathname}
          element={<Login route={routes.LOGIN} />}
        />
        <Route
          path={routes.AUTHENTICATED.pathname}
          element={<Navigate replace to={routes.AUTHENTICATED.HOME.to} />}
        />
        <Route
          path={routes.AUTHENTICATED.pathname}
          element={<Authenticated route={routes.AUTHENTICATED} />}
        >
          <Route
            path={routes.AUTHENTICATED.HOME.pathname}
            element={<Home route={routes.AUTHENTICATED.HOME} />}
          />
          <Route
            path={routes.AUTHENTICATED.BROWSE.pathname}
            element={
              <Navigate replace to={routes.AUTHENTICATED.BROWSE.FILMS.to} />
            }
          />
          <Route
            path={routes.AUTHENTICATED.BROWSE.pathname}
            element={<Browse route={routes.AUTHENTICATED.BROWSE} />}
          >
            <Route
              path={routes.AUTHENTICATED.BROWSE.FILMS.pathname}
              element={
                <BrowseFilms route={routes.AUTHENTICATED.BROWSE.FILMS} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </Container>
  )
}

export default AppContent
