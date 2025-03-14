describe('Simple test', () => {
  it('Visits the app root url', () => {
    cy.visit('127.0.0.1:5501')
    cy.contains('h1', 'Hacker Escape Rooms')
  })
})