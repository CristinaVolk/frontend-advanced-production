const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const componentTemplate = require('./componentTemplate');
const styleTemplate = require('./styleTemplate');
const storyTemplate = require('./storyTemplate');
const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot(
    'src',
    layer,
    sliceName,
    'ui',
    ...segments,
  );

  const createUIStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
    } catch (error) {
      console.log(`The directory for the UI ${sliceName} has not been created`, error);
    }
  };

  const componentName = firstCharToUpperCase(sliceName);

  const createUIComponent = async () => {
    try {
      await fs.writeFile(
        resolveModelPath(`${componentName}.tsx`),
        componentTemplate(componentName),
      );
    } catch (error) {
      console.log('The UI file has not been created', error);
    }
  };

  const createStyle = async () => {
    try {
      await fs.writeFile(
        resolveModelPath(`${componentName}.module.scss`),
        styleTemplate(componentName),
      );
    } catch (error) {
      console.log('The style file has not been created', error);
    }
  };

  const createStoryComponent = async () => {
    try {
      await fs.writeFile(
        resolveModelPath(`${componentName}.stories.tsx`),
        storyTemplate(componentName),
      );
    } catch (error) {
      console.log('The story file has not been created', error);
    }
  };

  await createUIStructure(sliceName);
  await createUIComponent(componentName);
  await createStyle(componentName);
  await createStoryComponent(componentName);
};
