import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entities/User';
import { selectByTestID } from '../../helpers/selectByTestID';

export function login(username = 'test@user.com', password = '123') {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));

    return body;
  });
}

export function getByTestID(dataTestId: string) {
  return cy.get(selectByTestID(dataTestId));
}

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestID(dataTestId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
