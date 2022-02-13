import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const Router = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

export default Router

Router.propTypes = {
  children: PropTypes.node
}
