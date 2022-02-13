describe('Can visit the home page', () => {
  beforeEach(() => {
    // Visit the app
    cy.visit('/')
  })

  it('Should load the home page', () => {
    // Check that the main header loaded
    cy.get('[data-cy="home-header"]').should('exist')
  })
})
