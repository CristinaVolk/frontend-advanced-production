export const setRate = (rate = 5, feedback = 'feedback') => {
  cy.getByTestID(`StarRating.${rate}`).click();
  cy.getByTestID('RatingModal.Input').type(feedback);
  cy.getByTestID('RatingModal.Send').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(rate: number, feedback?: string): Chainable<void>;
    }
  }
}
