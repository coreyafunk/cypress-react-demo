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
          accordions={data?.allFilms?.films.map(film => ({
            key: film.episodeID,
            summary: (
              <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                {`Episode ${romanize(film.episodeID)}: ${film.title}`}
              </Typography>
            ),
            details: (
              <>
                <Typography variant='body1' gutterBottom>
                  {`Released on ${format(
                    parseISO(film.releaseDate),
                    'EEEE LLL Mo, yyyy'
                  )}`}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  {`Directed by ${film.director}`}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  {`Produced by ${stringArrayToListText(film.producers)}`}
                </Typography>
              </>
            )
          }))}
        />
      )}
    </>
  )
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
