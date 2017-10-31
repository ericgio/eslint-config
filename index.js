const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'eslint:recommended',
  globals: {},
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'array-bracket-spacing': [ERROR, 'never'],
    'arrow-parens': [ERROR, 'always'],
    'comma-spacing': [ERROR, {
      before: false,
      after: true,
    }],
    'computed-property-spacing': [ERROR, 'never'],
    'comma-dangle': [ERROR, 'always-multiline'],
    'eqeqeq': [ERROR, 'allow-null'],
    'indent': [ERROR, 2, {SwitchCase: 1}],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'key-spacing': [ERROR, {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': [ERROR, {before: true, after: true}],
    'linebreak-style': [ERROR, 'unix'],
    'max-len': [WARN, 80, 2, {
      'ignorePattern': '^import\\s.+\\sfrom\\s.+;$',
      'ignoreUrls': true,
    }],
    'no-case-declarations': OFF,
    'no-debugger': ERROR,
    'no-trailing-spaces': ERROR,
    'no-undef': ERROR,
    'no-unreachable': ERROR,
    'no-unused-vars': [ERROR, {args: 'none', 'ignoreRestSiblings': true}],
    'object-curly-spacing': [ERROR, 'never'],
    'quotes': [ERROR, 'single', 'avoid-escape'],
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    'react/react-in-jsx-scope': ERROR,
    'react/jsx-closing-bracket-location': [ERROR, {
      'nonEmpty': 'after-props',
      'selfClosing': 'tag-aligned',
    }],
    'react/jsx-no-undef': ERROR,
    'react/jsx-key': WARN,
    'react/jsx-sort-props': [ERROR, {ignoreCase: true}],
    'react/no-direct-mutation-state': ERROR,
    'semi': [ERROR, 'always'],
    'semi-spacing': [ERROR, {
      before: false,
      after: true,
    }],
    'space-before-blocks': ERROR,
    'space-before-function-paren': [ERROR, 'never'],
    'space-in-parens': [ERROR, 'never'],
    'yoda': [ERROR, 'never'],
  },
};
