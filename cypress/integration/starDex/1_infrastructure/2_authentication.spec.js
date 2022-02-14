import { routes } from '../../../../src/routing'

describe('Can log in and out of the app', () => {
  it('Should log in and out of the app', () => {
    cy.shouldMatchRoute(routes.LOGIN)

    cy.log('Logging in')
    cy.login()

    // The user should be routed to the home page
    cy.shouldMatchRoute(routes.AUTHENTICATED.HOME)

    cy.log('Logging out')
    cy.logout()

    cy.shouldMatchRoute(routes.LOGIN)
  })
})
