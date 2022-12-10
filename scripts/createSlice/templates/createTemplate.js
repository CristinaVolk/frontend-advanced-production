const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createModel = require('./createModel');
const createUI = require('./createUI');
const createPublicApi = require('./createPublicApi');
const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, firstCharToUpperCase(sliceName)));
  } catch (error) {
    console.log(`The directory for the slice ${sliceName} has not been created`, error);
  }

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);
  await createPublicApi(layer, sliceName);
};
