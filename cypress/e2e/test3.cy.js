describe('Test 3', () => {
    it('Visits example website', () => {
        cy.visit('https://example.com')
        cy.contains('Example Domain')
    })
})