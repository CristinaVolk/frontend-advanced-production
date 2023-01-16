import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileFormReadonly } from './getProfileFormReadonly';

describe('getProfileFormReadonly.test', () => {
    const testValue = true;

    test('with value', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: {
                readonly: true,
            },
        };

        expect(getProfileFormReadonly(state as StateSchema)).toEqual(testValue);
    });

    test('with empty state passed', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileFormReadonly(state as StateSchema)).toBeFalsy();
    });
});
