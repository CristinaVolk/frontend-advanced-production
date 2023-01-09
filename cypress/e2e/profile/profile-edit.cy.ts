let profileId = '';

describe('The logged in user visits the profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((body) => {
      profileId = body.id;
      cy.visit(`profile/${body.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('ProfileCard is displayed', () => {
    cy.getByTestID('ProfileCard.Firstname').should('have.value', 'Test');
  });

  it('can edit the profile data', () => {
    const newName = 'newName';
    const newUsername = 'newUsername';
    cy.updateProfile(newName, newUsername);
    cy.getByTestID('ProfileCard.Firstname').should('have.value', newName);
    cy.getByTestID('ProfileCard.Username').should('have.value', newUsername);
  });
});
