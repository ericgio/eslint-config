module.exports = {
  /**
   * Forbid Webpack loader syntax in imports.
   *
   * Webpack allows specifying the loaders to use in the import source string
   * using a special syntax like this:
   *
   * ```var moduleWithOneLoader = require("my-loader!./my-awesome-module");```
   *
   * This syntax is non-standard, so it couples the code to Webpack. The
   * recommended way to specify Webpack loader configuration is in a Webpack
   * configuration file.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
   */
  'import/no-webpack-loader-syntax': 'off',
};
