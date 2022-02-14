// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { routes } from '../../src/routing'

/**
 * Reset the app's state
 */
Cypress.Commands.add('resetApp', () => {
  // If logged in, log out the user
  cy.url().then(url => {
    if (url !== `http://localhost:3000${routes.LOGIN.to}`) {
      cy.log('Logging out user from current session')
      cy.headlessLogout()
    }

    // Should be at the login screen
    cy.shouldMatchRoute(routes.LOGIN)
  })

  // Force reload without cache
  cy.log('Reloading page without the cache')
  cy.reload(true)
})

/**
 * Logs in the user
 */
Cypress.Commands.add(
  'login',
  ({ username = 'username', password = 'password' } = {}) => {
    // Enter the username
    cy.get('[data-cy="username-input"]').type(username)

    // Enter the password
    cy.get('[data-cy="password-input"]').type(password)

    // Click the Log In button
    cy.get('[data-cy="login-button"]').click()
  }
)

/**
 * Logs in the user headlessly
 */
Cypress.Commands.add(
  'headlessLogin',
  ({ toRoute = routes.AUTHENTICATED.HOME } = {}) => {
    window.sessionStorage.setItem('isLoggedIn', true)

    cy.visit(toRoute.to)
  }
)

/**
 * Logs out the user
 */
Cypress.Commands.add('logout', () => {
  // Click the Log Out button
  cy.get('[data-cy="logout-button"]').click()
})

/**
 * Logs out the user headlessly
 */
Cypress.Commands.add('headlessLogout', () => {
  window.sessionStorage.removeItem('isLoggedIn')

  cy.visit(routes.LOGIN.to)
})

/**
 * Checks if the current URL matches a known specified route
 */
Cypress.Commands.add('shouldMatchRoute', route => {
  cy.url().should('eq', `http://localhost:3000${route.to}`)
})

/**
 * Checks if the current URL does not match a known specified route
 */
Cypress.Commands.add('shouldNotMatchRoute', route => {
  cy.url().should.not('eq', `http://localhost:3000${route.to}`)
})
