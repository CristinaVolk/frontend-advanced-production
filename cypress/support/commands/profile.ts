export const updateProfile = (firstname: string, username: string) => {
    cy.getByTestID('EditableProfileCard.EditButton').click();
    cy.getByTestID('ProfileCard.Firstname').clear().type(firstname);
    cy.getByTestID('ProfileCard.Username').clear().type(username);
    cy.getByTestID('EditableProfileCard.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asasf' },
        body: {
            id: '4',
            username: 'test@user.com',
            firstname: 'Test',
            surname: 'Test',
            age: 22,
            currency: 'USD',
            country: 'Ireland',
            roles: ['USER'],
            password: '123',
            avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
