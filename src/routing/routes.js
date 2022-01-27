const ROUTES = {
  HOME: {
    pathname: '/',
    title: 'Home',
    headerTitle: 'Home'
  },
  SEARCH: {
    pathname: '/search',
    title: 'Search',
    headerTitle: 'Search'
  }
}

function getRouteByPathname (pathname) {
  return Object.values(ROUTES).find(route => route.pathname === pathname)
}

function getTitleByPathname (pathname) {
  return getRouteByPathname(pathname)?.title
}

function getHeaderTitleByPathname (pathname) {
  return getRouteByPathname(pathname)?.headerTitle
}

export default ROUTES
export { getTitleByPathname, getHeaderTitleByPathname }
