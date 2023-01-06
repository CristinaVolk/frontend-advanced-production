export function selectByTestID(dataTestId: string) {
  return cy.get(`[data-testid=${dataTestId}]`);
}
