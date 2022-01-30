const ROUTES = {
  HOME: {
    pathname: '/',
    to: '/',
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
    },

    PEOPLE: {
      pathname: 'people',
      to: '/browse/people',
      title: 'Browse People',
      headerTitle: 'Browse People'
    },

    PLANETS: {
      pathname: 'planets',
      to: '/browse/planets',
      title: 'Browse Planets',
      headerTitle: 'Browse Planets'
    }
  }
}

export default ROUTES
