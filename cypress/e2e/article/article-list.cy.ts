describe('User visits the Articles page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles');
    });
  });

  it('the article list is displayed', () => {
    cy.getByTestID('ArticleListItem').should('have.length.greaterThan', 1);
    cy.getByTestID('ArticleList').should('exist');
  });
});
