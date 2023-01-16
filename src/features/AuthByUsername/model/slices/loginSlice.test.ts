import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/LoginSchema';

describe('loginSlice.test', () => {
    test('with password value', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };

        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('123')),
        ).toStrictEqual({ password: '123' });
    });

    test('with username value', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'admin',
        };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('admin'),
            ),
        ).toStrictEqual({ username: 'admin' });
    });

    test('pending state', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
        };

        expect(
            loginReducer(state as LoginSchema, loginByUsername.pending),
        ).toEqual({ isLoading: true });
    });
});
