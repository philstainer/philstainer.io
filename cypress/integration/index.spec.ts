describe('home page', () => {
  it('navigates', () => {
    cy.visit('/')

    cy.contains('Hi there')
  })
})
