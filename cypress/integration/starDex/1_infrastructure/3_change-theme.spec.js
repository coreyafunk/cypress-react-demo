describe('Can change and persist the theme mode', () => {
  it('Should change the theme mode and persist it between sessions', () => {
    // The app's theme should be 'light' to begin with
    cy.get('[data-cy="app-theme-container_light"]').should('exist')

    // Click the theme button
    cy.get('[data-cy="theme-toggle-icon-button"]').click()

    // The app's theme should be 'dark' now
    cy.get('[data-cy="app-theme-container_dark"]').should('exist')

    // Reload the page, and don't use the cache
    cy.reload(true)

    // The app's theme should still be 'dark'
    cy.get('[data-cy="app-theme-container_dark"]').should('exist')

    // Clear the theme cookie, then reload the page and don't use the cache
    cy.clearCookie('theme-mode')
    cy.reload(true)

    // The app's theme should be 'light'
    cy.get('[data-cy="app-theme-container_light"]').should('exist')
  })
})
