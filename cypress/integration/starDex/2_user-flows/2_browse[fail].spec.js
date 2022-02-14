import { routes } from '../../../../src/routing'

describe('Can browse', () => {
  it('Should browse films', () => {
    cy.headlessLogin()

    cy.get('[data-cy="browse-accordion"]').click()

    // This command should fail
    cy.get('[data-cy="browse-books-link"]').click()

    cy.shouldMatchRoute(routes.AUTHENTICATED.BROWSE.FILMS)
  })
})
