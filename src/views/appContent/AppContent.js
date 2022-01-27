import { Routes, Route } from 'react-router-dom'

import { routes } from '../../routing'

import { Home } from '../'

function AppContent () {
  return (
    <Routes>
      <Route path={routes.HOME.pathname} element={<Home />} />
    </Routes>
  )
}

export default AppContent
