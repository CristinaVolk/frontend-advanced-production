let currentArticleId = '';
describe('The user visits the Article details page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  // testing wise, if the article is created, then the article should be deleted
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('The whole data about the article is displayed', () => {
    cy.getByTestID('Paragraph').should('exist');
  });

  it('the recommendation list is displayed', () => {
    cy.getByTestID('ArticleRecommendationsList').should('exist');
  });
  it('the user can leave the comment', () => {
    cy.getByTestID('ArticleDetails.Info');
    cy.getByTestID('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestID('CommentCard.Content').should('have.length', 1);
  });

  it('the user rates the article', () => {
    cy.getByTestID('RatingCard').should('exist');

    cy.getByTestID('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
