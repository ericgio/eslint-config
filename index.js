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
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'computed-property-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'eqeqeq': ['error', 'allow-null'],
    'indent': ['error', 2, {SwitchCase: 1}],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': ['error', {before: true, after: true}],
    'linebreak-style': ['error', 'unix'],
    'max-len': [1, 80, 2, {
      'ignorePattern': '^import\\s.+\\sfrom\\s.+;$',
      'ignoreUrls': true
    }],
    'no-case-declarations': 0,
    'no-debugger': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': ['error', {args: 'none'}],
    'object-curly-spacing': ['error', 'never'],
    'quotes': ['error', 'single', 'avoid-escape'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/jsx-closing-bracket-location': ['error', {
      'nonEmpty': 'after-props',
      'selfClosing': 'tag-aligned',
    }],
    'react/jsx-no-undef': 'error',
    'react/jsx-key': 1,
    'react/jsx-sort-props': ['error', {ignoreCase: true}],
    'react/no-direct-mutation-state': 'error',
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'yoda': ['error', 'never'],
  },
};
