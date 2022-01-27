import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { getTitleByPathname, getHeaderTitleByPathname } from '../routing'

function useViewState () {
  const { pathname } = useLocation()

  const title = useMemo(() => getTitleByPathname(pathname), [pathname])
  const headerTitle = useMemo(() => getHeaderTitleByPathname(pathname), [
    pathname
  ])

  return {
    title,
    headerTitle
  }
}

export default useViewState
