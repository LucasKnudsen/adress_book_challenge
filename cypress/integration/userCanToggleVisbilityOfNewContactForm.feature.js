describe('user can toggle form visibility on and off', () => {
    before(() => {
		cy.visit('index.html')
	})
	
	it('by clicking the "Add Contact" button', () => {
	cy.get('#new-contact-form').should('not.be.visible')
	cy.get('#add-contact').click()
	cy.get('#new-contact-form').should('be.visible')
	cy.get('#add-contact').click()
	cy.get('#new-contact-form').should('not.be.visible')
	})
})