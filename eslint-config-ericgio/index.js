const baseRules = require('../rules/base');
const importRules = require('../rules/import');
const reactRules = require('../rules/react');

module.exports = {
  extends: ['airbnb'],
  rules: Object.assign({}, baseRules, importRules, reactRules),
};
