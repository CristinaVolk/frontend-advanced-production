describe('Routing', () => {
    describe('Wnen the user is NOT authorized', () => {
        it('visits the main page', () => {
            cy.visit('/');
            cy.getByTestID('MainPage').should('exist');
        });
        it('opens the profile page', () => {
            cy.visit('/profile/1');
            cy.getByTestID('MainPage').should('exist');
        });
        it('opens the non existing page', () => {
            cy.visit('/ahhdgdhjfn');
            cy.getByTestID('NotFoundPage').should('exist');
        });
    });
    describe('Wnen the user IS authorized', () => {
        beforeEach('', () => {
            cy.login('volk@com', '314');
        });

        it('visits the main page', () => {
            cy.visit('/');
            cy.getByTestID('MainPage').should('exist');
        });
        it('opens the profile page', () => {
            cy.visit('/profile/3');
            cy.get('[data-testid=ProfilePage]').should('exist');
        });
        it('opens the Article page', () => {
            cy.visit('/articles');
            cy.getByTestID('ArticlePage').should('exist');
        });
    });
});
