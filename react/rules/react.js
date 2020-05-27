module.exports = {
  /**
   * Enforce consistent usage of destructuring assignment of props, state, and
   * context.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
   */
  'react/destructuring-assignment': 'off',

  /**
   * Validate closing bracket location in JSX.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
   */
  'react/jsx-closing-bracket-location': ['error', {
    nonEmpty: 'after-props',
    selfClosing: 'tag-aligned',
  }],

  /**
   * Restrict file extensions that may contain JSX.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
   */
  'react/jsx-filename-extension': ['error', {
    extensions: ['.js', '.jsx'],
  }],

  /**
   * Enforce shorthand or standard form for React fragments
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
   */
  'react/jsx-fragments': ['error', 'element'],

  /**
   * One JSX element per line.
   *
   * This option limits every line in JSX to one expression each.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
   */
  'react/jsx-one-expression-per-line': 'off',

  /**
   * Disallow JSX props spreading.
   *
   * Enforces that there is no spreading for any JSX attribute. This enhances
   * readability of code by being more explicit about what props are received by
   * the component. It is also good for maintainability by avoiding passing
   * unintentional extra props and allowing react to emit warnings when invalid
   * HTML props are passed to HTML elements.
   */
  'react/jsx-props-no-spreading': 'off',

  /**
   * Prevent missing parentheses around multiline JSX.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
   */
  'react/jsx-wrap-multilines': ['error', {
    arrow: 'parens-new-line',
    assignment: 'ignore',
    condition: 'ignore',
    declaration: 'ignore',
    logical: 'ignore',
    prop: 'ignore',
    return: 'parens-new-line',
  }],

  /**
   * Prevent usage of setState in `componentDidUpdate`.
   *
   * Updating the state after a component update will trigger a second
   * `render()` call and can lead to property/layout thrashing.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
   *
   * NOTE: In current versions of React, `componentDidUpdate` is the only place
   * to update state based on (potential) prop changes.
   * See: https://github.com/airbnb/javascript/issues/1875
   */
  'react/no-did-update-set-state': 'off',

  /**
   * Prevent missing props validation in a React component definition.
   *
   * PropTypes improve the reusability of your component by validating the
   * received data. It can warn other developers if they make a mistake while
   * reusing the component with improper data type.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
   */
  'react/prop-types': 'off',

  /**
   * Enforce a defaultProps definition for every prop that is not a required
   * prop.
   *
   * This rule aims to ensure that any non-required PropType declaration of a
   * component has a corresponding defaultProps value.
   *
   * One advantage of defaultProps over custom default logic in your code is
   * that `defaultProps` are resolved by React before the `PropTypes`
   * typechecking happens, so typechecking will also apply to your
   * `defaultProps`. The same also holds true for stateless functional
   * components: default function parameters do not behave the same as
   * `defaultProps` and thus using `defaultProps` is still preferred.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
   */
  'react/require-default-props': 'off',

  /**
   * Enforce component methods order.
   *
   * When creating React components it is more convenient to always follow the
   * same organisation for method order to help you easily find lifecycle
   * methods, event handlers, etc.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
   */
  'react/sort-comp': ['error', {
    order: [
      'static-variables',
      'static-methods',
      'state',
      'instance-variables',
      'lifecycle',
      'render',
      'everything-else',
    ],
  }],

  /**
   * Enforce state initialization style.
   *
   * This rule will enforce the state initialization style to be either in a
   * constructor or with a class property.
   *
   * `always` (default)
   *    Enforces state initialization style to be in a constructor.
   *
   * `never`
   *    Enforces state initialization style to be with a class property.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
   */
  'react/state-in-constructor': ['error', 'never'],
};
