import { routes } from '../../../../src/routing'

describe('Can load the app', () => {
  it('Should load the login page', () => {
    // Check that the user is automatically navigated to the login route
    cy.shouldMatchRoute(routes.LOGIN)
  })
})
