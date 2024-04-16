// describe is a test suite in which each it has testcase
describe('Google Search Engine', () => {
    beforeEach(() => {

    
      // Visit Google homepage before each test
      cy.visit('https://www.google.com/');
      // verify the title
      cy.title().should('eq', 'Google')
      cy.wait(10000);
    
  
    it('it should display the Google logo', () => {
      // Assert that Google logo is visible
      cy.get('img[alt="Google"]').should('be.visible');
    });
  
    it('it should navigate to the Images page', () => {
      // Click on the "Images" link in the header
      cy.contains('Images').click();
  
      // Assert that the URL has changed to the Images search page
      cy.url().should('include', '/imghp');
    });
  
    it('it should navigate to the About page', () => {
      // Click on the "About" link in the footer
      cy.contains('About').click();
  
      // Assert that the URL has changed to the About page
      cy.url().should('include', '/about');
    });
    it('should be able to perform a basic search', () => {
        // Type "computer" on the search bar and click enter
        cy.get('#APjFqb').type('computer'+ '{enter}').find('.gNO89b').click();
        cy.url().should('include', '/search?q=computer');
    
      });
  });
});