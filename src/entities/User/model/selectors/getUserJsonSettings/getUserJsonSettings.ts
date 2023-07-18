import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../../types/JsonSettings';

const defaultJsonSettings: JsonSettings = {};

const getUserJsonSettings = (state: StateSchema) =>
    state.user.authData?.jsonSettings || defaultJsonSettings;

export const [userJsonSettingsSelector, getUserJsonSettingsHook] =
    buildSelector(getUserJsonSettings);
