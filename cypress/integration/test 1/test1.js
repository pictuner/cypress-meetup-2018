/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
  })

  it('should click', function () {
    cy.get('[data-cy="toolbar-title"]')
      .contains('TabTracker')
  })
})
