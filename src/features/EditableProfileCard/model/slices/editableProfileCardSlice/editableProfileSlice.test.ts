import { updateProfileData } from '../../services/updateProfileData/updateProfileData';
import {
    editableProfileCardActions,
    editableProfileCardReducer,
} from './editableProfileCardSlice';
import { EditableProfileCardSchema } from '../../types/EditableProfile';

describe('EditableProfileCardSchema.test', () => {
    const dataValue = {
        firstname: 'Cris',
        surname: 'Volk',
        age: 22,
        currency: 'EUR',
        country: 'Scotland',
        username: 'admin@admin.com',
        avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
    };

    test('with true readOnly value', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            readonly: true,
        };

        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                editableProfileCardActions.setReadOnly(true),
            ),
        ).toStrictEqual({ readonly: true });
    });

    test('cancelEdit action', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            readonly: false,
            data: dataValue,
            formData: { ...dataValue, age: 21 },
            validateProfileErrors: undefined,
        };

        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                editableProfileCardActions.cancelEdit(),
            ),
        ).toEqual({
            readonly: true,
            data: dataValue,
            formData: dataValue,
            validateProfileErrors: undefined,
        });
    });

    test('updateData action', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            readonly: false,
            data: dataValue,
            formData: dataValue,
            validateProfileErrors: undefined,
        };
        const profileDataUpdated = { ...dataValue, age: 18 };

        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                editableProfileCardActions.updateData(profileDataUpdated),
            ),
        ).toEqual({
            readonly: false,
            data: dataValue,
            formData: profileDataUpdated,
            validateProfileErrors: undefined,
        });
    });

    test('updateProfileData extra action pending', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
            error: undefined,
        };

        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                updateProfileData.pending,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
        };

        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                updateProfileData.fulfilled(dataValue, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            formData: dataValue,
            data: dataValue,
        });
    });
});
