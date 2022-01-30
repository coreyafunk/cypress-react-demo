import { useState } from 'react'
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  List,
  ListItem,
  Typography
} from '@mui/material'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { routes } from '../../routing'

function Home ({ route }) {
  console.log({ route })
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <>
      <Typography gutterBottom variant='h5'>
        Welcome to the Start Wars universe explorer
      </Typography>
      <Typography gutterBottom variant='p'>
        What would you like to do?
      </Typography>
      {Object.values(ACCORDIONS).map((accordion, accordionIndex) => {
        return (
          <Accordion
            key={accordionIndex}
            TransitionProps={{ unmountOnExit: true }}
          >
            <AccordionSummary>
              <Typography>{accordion.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>{accordion.details}</AccordionDetails>
          </Accordion>
        )
      })}
    </>
  )
}

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

const ACCORDIONS = {
  BROWSE_FILMS: {
    summary: 'Browse',
    details: (
      <List>
        <ListItem>
          <Link to={routes.BROWSE.FILMS.to}>Films</Link>
        </ListItem>
        <ListItem>
          <Link to={routes.BROWSE.PEOPLE.to}>People</Link>
        </ListItem>
      </List>
    )
  }
}

export default Home
