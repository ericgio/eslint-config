const reactRules = require('./rules/react');

module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-ericgio-base',
  ].map(require.resolve),
  rules: Object.assign({}, reactRules),
};
