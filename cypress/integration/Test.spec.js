// describe is a test suite in which each it has testcase
describe('Google Search Engine', () => {

    beforeEach(() => {
      // Visit Google homepage before each test
      cy.visit('/');
      cy.wait(3000);
    });

    it('it should display the Google logo', () => {
      // Assert that Google logo is visible
      cy.get('img[alt="Google"]').should('be.visible');
    });

    it('should be able to perform a basic search', () => {
        // Type "computer" on the search bar and click enter
        cy.get('#APjFqb').type('computer'+ '{enter}')
        cy.wait(2000);
       // cy.find('.gNO89b').should('have.text','Google Search').click();
        cy.url().should('include', '/search?q=computer');
    
      });

      it.skip('it should navigate to the Images page', () => {
        // Click on the "Images" link in the header
        cy.get('.gb_J').should('have.text','Images').click();
        cy.wait(3000);
        // Assert that the URL has changed to the Images search page
       cy.url().should('include', '/imghp');
      });
  });
