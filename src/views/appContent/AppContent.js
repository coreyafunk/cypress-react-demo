import { Routes, Route, Navigate } from 'react-router-dom'
import { Container } from '@mui/material'

import { routes } from '../../routing'
import { Home, Browse, BrowseFilms, BrowsePeople } from '../'

function AppContent () {
  return (
    <Container maxWidth={false}>
      <Routes>
        <Route
          path={routes.HOME.pathname}
          element={<Home route={routes.HOME} />}
        />
        <Route
          path={routes.BROWSE.pathname}
          element={<Navigate replace to={routes.BROWSE.FILMS.to} />}
        />
        <Route
          path={routes.BROWSE.pathname}
          element={<Browse route={routes.BROWSE} />}
        >
          <Route
            path={routes.BROWSE.FILMS.pathname}
            element={<BrowseFilms route={routes.BROWSE.FILMS} />}
          />
          <Route
            path={routes.BROWSE.PEOPLE.pathname}
            element={<BrowsePeople route={routes.BROWSE.PEOPLE} />}
          />
        </Route>
      </Routes>
    </Container>
  )
}

export default AppContent
