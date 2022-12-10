const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');
const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot(
    'src',
    layer,
    sliceName,
    'model',
    ...segments,
  );

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (error) {
      console.log(`The directory for the model ${sliceName} has not been created`, error);
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (error) {
      console.log('The Redux slice file has not been created', error);
    }
  };

  const createSchemaType = async () => {
    const sliceSchemaName = `${firstCharToUpperCase(sliceName)}`;
    try {
      await fs.writeFile(
        resolveModelPath('types', `${sliceSchemaName}Schema.ts`),
        schemaTypeTemplate(sliceSchemaName),
      );
    } catch (error) {
      console.log('The Schema Type file has not been created', error);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};
