describe('Landing page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have a label, an input box, a submit button and a section for results', () => {
    cy.get('.racing-form').contains('Race Time')
    cy.get('.input-box')
    cy.get('button').contains('Submit')
    cy.get('.results').contains('Results')
  })

  it('should be able to enter race end times, click submit and see a result', () => {
    cy.get('.input-box').should('be.visible').type('02:00 PM, DAY 19, 02:00 PM, DAY 20, 01:58 PM, DAY 20')
    cy.get('button').contains('Submit').click()
    cy.get('.display-results').contains('The average race time was 27239 minutes')
  })

  it('should show an error message if the user types the incorrect format for the input', () => {
    cy.get('.input-box').should('be.visible').type('kjd;alkjf;dlk')
    cy.get('button').contains('Submit').click()
    cy.get('.display-error').contains('You have entered your race times incorrectly. Please try again.')
  })

})