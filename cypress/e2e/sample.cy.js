describe('Basic CI Test', () => {
    it('Visits example website', () => {
        cy.visit('https://example.com')
        cy.contains('Example Domain')
    })
})