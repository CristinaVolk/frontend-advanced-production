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

  it('the article list is displayed with the help of fixture', () => {
    cy.intercept('GET', '**/articles/*', {
      fixture: 'articles.json',
    });
    cy.getByTestID('ArticleListItem').should('have.length.greaterThan', 1);
    cy.getByTestID('ArticleList').should('exist');
  });
});
