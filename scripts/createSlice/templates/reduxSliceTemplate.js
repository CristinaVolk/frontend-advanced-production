const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = (sliceName) => {
  const typeName = `${firstCharToUpperCase(sliceName)}Schema`;

  return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { ${typeName} } from '../types/${sliceName}Schema'
  
  
  const initialState: ${typeName} = {
  
};


export const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
  initialState,
  reducers: {
  actionCreatorName: (state, action: PayloadAction<string>) => {
      state = action.payload;
      }
    },
  extraReducers: (builder) => {
    builder
      // .addCase( , (state) => {
      //   state.isLoading = true;
      //   state.error = undefined;
      // })
      // .addCase( , (state, action) => {
      //   state.isLoading = false;
      //   state.data = action.payload;
      // })
      // .addCase( , (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // });
  },
});

export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;

  `;
};
