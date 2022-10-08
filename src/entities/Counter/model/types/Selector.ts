import { StateSchema } from 'app/providers/StoreProvider';

export interface Selector<S> {
  (state: StateSchema): S;
}
