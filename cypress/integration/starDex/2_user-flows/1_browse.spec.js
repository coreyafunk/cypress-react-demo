import { routes } from '../../../../src/routing'

describe('Can browse', () => {
  it('Should browse films', () => {
    cy.headlessLogin()

    cy.get('[data-cy="browse-accordion"]').click()

    cy.get('[data-cy="browse-films-link"]').click()

    cy.shouldMatchRoute(routes.AUTHENTICATED.BROWSE.FILMS)
  })
})
