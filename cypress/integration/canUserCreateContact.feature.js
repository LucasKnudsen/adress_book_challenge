describe('user can create a contact', () => {
	it('test', () => {
        cy.visit('index.html'),
        cy.get('#add-contact').click()
	})
})