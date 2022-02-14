import { Skeleton, Typography } from '@mui/material'
import { gql, useQuery } from '@apollo/client'
import { romanize } from 'romans'
import { parseISO, format } from 'date-fns'

import { ControlledAccordion } from '../../../components'
import { stringArrayToListText } from '../../../utils'

function BrowseFilms () {
  const { data, loading } = useQuery(GET_ALL_FILMS)

  return (
    <>
      <Typography variant='body1' gutterBottom>
        Films
      </Typography>
      {loading ? (
        <Skeleton />
      ) : (
        <ControlledAccordion
          collapseOthersOnExpand
          unmountOnExit
          accordions={data?.allFilms?.films?.map(film => ({
            key: film.episodeID,
            summary: (
              <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                {formatTitle(film)}
              </Typography>
            ),
            summaryProps: {
              'data-cy': 'film-accordion'
            },
            details: (
              <>
                <Typography variant='body1' gutterBottom>
                  {formatReleaseDate(film)}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  {formatDirectedBy(film)}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  {formatProducedBy(film)}
                </Typography>
              </>
            )
          }))}
        />
      )}
    </>
  )
}

function formatTitle (film) {
  return `Episode ${romanize(film.episodeID)}: ${film.title}`
}

function formatReleaseDate (film) {
  return `Released on ${format(
    parseISO(film.releaseDate),
    'EEEE LLL Mo, yyyy'
  )}`
}

function formatDirectedBy (film) {
  return `Directed by ${film.director}`
}

function formatProducedBy (film) {
  return `Produced by ${stringArrayToListText(film.producers)}`
}

const GET_ALL_FILMS = gql`
  query GetAllFilms {
    allFilms {
      films {
        title
        releaseDate
        director
        producers
        episodeID
        openingCrawl
      }
    }
  }
`

export default BrowseFilms
