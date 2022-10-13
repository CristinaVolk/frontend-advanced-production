import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';

export interface StateSchema {
  user: UserSchema
  counter: CounterSchema;
  loginForm: LoginSchema
}
