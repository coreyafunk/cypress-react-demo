import { List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { routes } from '../../routing'
import { ControlledAccordion } from '../../components'

function Home () {
  return (
    <>
      <Typography gutterBottom variant='h5'>
        Welcome to the StarDex
      </Typography>
      <Typography gutterBottom variant='body1'>
        What would you like to do?
      </Typography>
      <ControlledAccordion accordions={ACCORDIONS} unmountOnExit />
    </>
  )
}

const ACCORDIONS = [
  {
    key: 'browse',
    summary: 'Browse',
    details: (
      <List>
        <ListItem>
          <Link to={routes.BROWSE.FILMS.to}>Films</Link>
        </ListItem>
        <ListItem>
          <Link to={routes.BROWSE.PEOPLE.to}>People</Link>
        </ListItem>
        <ListItem>
          <Link to={routes.BROWSE.PLANETS.to}>Planets</Link>
        </ListItem>
      </List>
    )
  },
  {
    key: 'search',
    summary: 'Search',
    details: (
      <List>
        <ListItem>
          <Link to={routes.BROWSE.FILMS.to}>Films</Link>
        </ListItem>
        <ListItem>
          <Link to={routes.BROWSE.PEOPLE.to}>People</Link>
        </ListItem>
        <ListItem>
          <Link to={routes.BROWSE.PLANETS.to}>Planets</Link>
        </ListItem>
      </List>
    )
  }
]

export default Home
