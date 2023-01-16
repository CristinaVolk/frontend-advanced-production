import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getUserIsInited = (state: StateSchema) => state.user._inited;

export const [getIsInitedHook] = buildSelector(getUserIsInited);
