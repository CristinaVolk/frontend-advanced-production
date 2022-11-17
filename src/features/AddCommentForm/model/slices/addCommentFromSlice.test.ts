import { addCommentFormActions, addCommentFormReducer } from '../slices/addCommentFormSlice';
import { AddCommentFormSchema } from '../types/AddCommentFormSchema';

describe('addCommentFormSlice.test', () => {
  test('with comment value', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: '',
    };

    expect(addCommentFormReducer(
      state as AddCommentFormSchema,
      addCommentFormActions.setText('123'),
    )).toStrictEqual({ text: '123' });
  });
});
