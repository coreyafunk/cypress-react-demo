import { List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { routes } from '../../routing'
import { ControlledAccordion } from '../../components'

function Home () {
  return (
    <>
      <Typography gutterBottom variant='h5' data-cy='home-header'>
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
          <Link to={routes.AUTHENTICATED.BROWSE.FILMS.to}>Films</Link>
        </ListItem>
      </List>
    )
  }
]

export default Home
