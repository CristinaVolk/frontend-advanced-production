const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['feature', 'entity', 'page'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Please name the layer ${layers.join(' or ')}`);
}

if (!sliceName) {
  throw new Error('Please name the slice');
}

createTemplate(layer, sliceName);
