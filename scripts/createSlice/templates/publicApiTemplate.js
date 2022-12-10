const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = (sliceName) => {
  const sliceSchemaName = `${firstCharToUpperCase(sliceName)}Schema`;

  return `import { ${sliceName}Reducer } from './model/slices/${sliceName}Slice';
import { ${sliceSchemaName} } from './model/types/${sliceSchemaName}';

export {
  ${sliceName}Reducer,
  ${sliceSchemaName},
};
`;
};
