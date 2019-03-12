const baseRules = require('../rules/base');
const importRules = require('../rules/import');

module.exports = {
  extends: ['airbnb-base'],
  rules: Object.assign({}, baseRules, importRules),
};
