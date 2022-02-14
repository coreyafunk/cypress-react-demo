const ROUTES = {
  LOGIN: {
    pathname: 'login',
    to: '/login',
    title: 'Login',
    headerTitle: 'Login'
  },

  AUTHENTICATED: {
    pathname: '/',
    to: '/',
    title: 'Home',
    headerTitle: 'Home',

    HOME: {
      pathname: 'home',
      to: '/home',
      title: 'Home',
      headerTitle: 'Home'
    },

    BROWSE: {
      pathname: 'browse',
      to: '/browse',
      title: 'Browse',
      headerTitle: 'Browse',

      FILMS: {
        pathname: 'films',
        to: '/browse/films',
        title: 'Browse Films',
        headerTitle: 'Browse Films'
      }
    }
  }
}

export default ROUTES
