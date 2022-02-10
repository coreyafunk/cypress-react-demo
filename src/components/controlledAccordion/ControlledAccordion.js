import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary
} from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'

function ControlledAccordion ({
  accordions = [],
  unmountOnExit = false,
  collapseOthersOnExpand = false
}) {
  const [expandedAccordionKeys, setExpandedAccordionKeys] = useState([])

  const handleChange = useCallback(
    (accordionKey, expanded) => {
      if (expanded) {
        if (collapseOthersOnExpand) {
          // Only this accordion should be expanded
          setExpandedAccordionKeys([accordionKey])
        } else {
          // Add this accordion to the list of expanded accordions
          setExpandedAccordionKeys([...expandedAccordionKeys, accordionKey])
        }
      } else {
        if (collapseOthersOnExpand) {
          // No accordions should be open
          setExpandedAccordionKeys([])
        } else {
          // Collapse this particular accordion
          setExpandedAccordionKeys(
            expandedAccordionKeys.filter(
              expandedAccordionKey => expandedAccordionKey !== accordionKey
            )
          )
        }
      }
    },
    [collapseOthersOnExpand, expandedAccordionKeys]
  )

  return (
    <>
      {Object.values(accordions).map(accordion => {
        return (
          <Accordion
            key={accordion.key}
            TransitionProps={{ unmountOnExit }}
            onChange={(_, expanded) => {
              handleChange(accordion.key, expanded)
            }}
            expanded={expandedAccordionKeys.includes(accordion.key)}
          >
            <AccordionSummary>{accordion.summary}</AccordionSummary>
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

const accordionPropType = PropTypes.shape({
  /**
   * Unique key identifying an accordion (aids in React's internal optimization and tracks which
   * accordion is open)
   */
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * The accordion's summary
   */
  summary: PropTypes.node.isRequired,

  /**
   * The accordion's details
   */
  details: PropTypes.node.isRequired
})

ControlledAccordion.propTypes = {
  /**
   * Accordion definitions
   */
  accordions: PropTypes.arrayOf(accordionPropType).isRequired,

  /**
   *
   */
  unmountOnExit: PropTypes.bool,

  /**
   *
   */
  collapseOthersOnExpand: PropTypes.bool
}

export default ControlledAccordion
