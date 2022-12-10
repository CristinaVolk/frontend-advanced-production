const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const publicApiTemplate = require('./publicApiTemplate');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot(
    'src',
    layer,
    sliceName,
    ...segments,
  );

  const createPublicApi = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('index.ts'),
        publicApiTemplate(sliceName),
      );
    } catch (error) {
      console.log('The publicApi index file has not been created', error);
    }
  };

  await createPublicApi();
};
