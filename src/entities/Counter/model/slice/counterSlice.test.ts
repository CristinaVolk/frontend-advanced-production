import { CounterSchema } from 'entities/Counter';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
  test('should return decremented value', () => {
    const state: CounterSchema = { value: 10 };
    const decremented = counterReducer(state, counterActions.decrement);

    expect(decremented).toEqual({ value: 9 });
  });

  test('should return decremented value', () => {
    const state: CounterSchema = { value: 10 };
    const decremented = counterReducer(state, counterActions.increment);

    expect(decremented).toEqual({ value: 11 });
  });

  test('should return incrementByAmount value', () => {
    const state: CounterSchema = { value: 10 };
    const decremented = counterReducer(state, counterActions.incrementByAmount(9));

    expect(decremented).toEqual({ value: 19 });
  });

  test('should work with undefined state', () => {
    const decremented = counterReducer(undefined, counterActions.decrement);

    expect(decremented).toEqual({ value: -1 });
  });
});
