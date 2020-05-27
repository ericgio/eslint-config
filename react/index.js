const reactRules = require('./rules/react');

module.exports = {
  extends: [
    'eslint-config-airbnb',
    '@ericgio/eslint-config',
  ].map(require.resolve),
  rules: { ...reactRules },
};
