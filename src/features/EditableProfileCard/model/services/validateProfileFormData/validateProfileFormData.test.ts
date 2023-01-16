import { ValidateProfileError } from '../../consts/consts';
import { validateProfileFormData } from '../validateProfileFormData/validateProfileFormData';

const dataValue = {
    firstname: 'Cris',
    surname: 'Volk',
    age: 22,
    currency: 'EUR',
    country: 'Scotland',
    username: 'admin@admin.com',
    avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
};

describe('validateProfileFormData.test', () => {
    test('should go green', () => {
        const result = validateProfileFormData(dataValue);
        expect(result).toEqual([]);
    });

    test('should return no data error', () => {
        const result = validateProfileFormData();
        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('should return age error', () => {
        const result = validateProfileFormData({ ...dataValue, age: 0 });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('should return country error', () => {
        const result = validateProfileFormData({ ...dataValue, country: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('should return all profile form errors', () => {
        const result = validateProfileFormData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
