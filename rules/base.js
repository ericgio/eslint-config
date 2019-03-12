module.exports = {
  /**
   * Require braces in arrow function body.
   *
   * Arrow functions have two syntactic forms for their function bodies. They
   * may be defined with a block body (denoted by curly braces) `() => { ... }`
   * or with a single expression `() => ...`, whose value is implicitly
   * returned.
   *
   * This rule can enforce or disallow the use of braces around arrow function
   * body.
   *
   * https://eslint.org/docs/rules/arrow-body-style
   */
  'arrow-body-style': 'off',

  /**
   * Require parens in arrow function arguments.
   *
   * Arrow functions can omit parentheses when they have exactly one parameter.
   * In all other cases the parameter(s) must be wrapped in parentheses. This
   * rule enforces the consistent use of parentheses in arrow functions.
   *
   * https://eslint.org/docs/rules/arrow-parens
   */
  'arrow-parens': ['error', 'always'],

  /**
   * Require or disallow trailing commas.
   *
   * Trailing commas in object literals are valid according to the ECMAScript 5
   * (and ECMAScript 3!) spec. However, IE8 (when not in IE8 document mode) and
   * below will throw an error when it encounters trailing commas in JavaScript.
   *
   * Trailing commas simplify adding and removing items to objects and arrays,
   * since only the lines you are modifying must be touched. Another argument in
   * favor of trailing commas is that it improves the clarity of diffs when an
   * item is added or removed from an object or array.
   *
   * https://eslint.org/docs/rules/comma-dangle
   */
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    exports: 'always-multiline',
    functions: 'ignore',
    imports: 'always-multiline',
    objects: 'always-multiline',
  }],

  /**
   * Require or disallow an empty line between class members.
   *
   * This rule improves readability by enforcing lines between class members.
   * It will not check empty lines before the first member and after the last
   * member, since that is already taken care of by padded-blocks.
   *
   * https://eslint.org/docs/rules/lines-between-class-members
   */
  'lines-between-class-members': ['error', 'always', {
    exceptAfterSingleLine: true,
  }],

  /**
   * Enforce a maximum line length.
   *
   * Very long lines of code in any language can be difficult to read. In order
   * to aid in readability and maintainability many coders have developed a
   * convention to limit lines of code to X number of characters (traditionally
   * 80 characters).
   *
   * https://eslint.org/docs/rules/max-len
   */
  'max-len': ['warn', 80, 2, {
    ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
    ignoreUrls: true,
  }],

  /**
   * Disallow the unary operators `++`` and `--`.
   *
   * Because the unary `++`` and `--`` operators are subject to automatic
   * semicolon insertion, differences in whitespace can change semantics of
   * source code.
   *
   * https://eslint.org/docs/rules/no-plusplus
   */
  'no-plusplus': ['error', {
    allowForLoopAfterthoughts: true,
  }],

  /**
   * Disallow assignment in return statement.
   *
   * One of the interesting, and sometimes confusing, aspects of JavaScript is
   * that assignment can happen at almost any point. Because of this, an errant
   * equals sign can end up causing assignment when the true intent was to do a
   * comparison. This is especially true when using a return statement. For
   * example:
   *
   *  function doSomething() {
   *    return foo = bar + 2;
   *  }
   *
   * It is difficult to tell the intent of the return statement here. It’s
   * possible that the function is meant to return the result of bar + 2, but
   * then why is it assigning to foo? It’s also possible that the intent was to
   * use a comparison operator such as == and that this code is an error.
   *
   * Because of this ambiguity, it’s considered a best practice to not use
   * assignment in return statements.
   *
   * https://eslint.org/docs/rules/no-return-assign
   */
  'no-return-assign': 'off',

  /**
   * Disallow dangling underscores in identifiers.
   *
   * As far as naming conventions for identifiers go, dangling underscores may
   * be the most polarizing in JavaScript. Dangling underscores are underscores
   * at either the beginning or end of an identifier, such as: `var _foo;`
   *
   * There is actually a long history of using dangling underscores to indicate
   * “private” members of objects in JavaScript (though JavaScript doesn’t have
   * truly private members, this convention served as a warning). This began
   * with SpiderMonkey adding nonstandard methods such as __defineGetter__().
   * The intent with the underscores was to make it obvious that this method was
   * special in some way. Since that time, using a single underscore prefix has
   * become popular as a way to indicate “private” members of objects.
   *
   * Whether or not you choose to allow dangling underscores in identifiers is
   * purely a convention and has no effect on performance, readability, or
   * complexity. It’s purely a preference.
   *
   * https://eslint.org/docs/rules/no-underscore-dangle
   */
  'no-underscore-dangle': ['error', {
    allowAfterThis: true,
  }],

  /**
   * Disallow Unused Expressions.
   *
   * An unused expression which has no effect on the state of the program
   * indicates a logic error.
   *
   * For example, `n + 1;` is not a syntax error, but it might be a typing
   * mistake where a programmer meant an assignment statement `n += 1;` instead.
   * Sometimes, such unused expressions may be eliminated by some build tools
   * in production environment, which possibly breaks application logic.
   *
   * https://eslint.org/docs/rules/no-unused-expressions
   */
  'no-unused-expressions': ['error', {
    allowShortCircuit: true,
    allowTernary: true,
  }],

  /**
   * Disallow Unused Variables.
   *
   * Variables that are declared and not used anywhere in the code are most
   * likely an error due to incomplete refactoring. Such variables take up space
   * in the code and can lead to confusion by readers.
   *
   * https://eslint.org/docs/rules/no-unused-vars
   */
  'no-unused-vars': ['error', {
    args: 'none',
    ignoreRestSiblings: true,
  }],

  /**
   * Enforce consistent line breaks inside braces.
   *
   * This rule enforces consistent line breaks inside braces of object literals
   * or destructuring assignments.
   *
   * https://eslint.org/docs/rules/object-curly-newline
   */
  'object-curly-newline': ['error', {
    consistent: true,
    multiline: true,
  }],

  /**
   * Enforce variables to be declared either together or separately in
   * functions.
   *
   * Variables can be declared at any point in JavaScript code using `var`,
   * `let`, or `const`. There are many styles and preferences related to the
   * declaration of variables, and one of those is deciding on how many
   * variable declarations should be allowed in a single function.
   *
   * There are two schools of thought in this regard:
   *
   *    1. There should be just one variable declaration for all variables in
   *       the function. That declaration typically appears at the top of the
   *       function.
   *    2. You should use one variable declaration for each variable you want to
   *       define.
   *
   * For instance:
   *
   *    // One variable declaration per function
   *    function foo() {
   *      var bar, baz;
   *    }
   *
   *    // Multiple variable declarations per function
   *    function foo() {
   *      var bar;
   *      var baz;
   *    }
   *
   * The single-declaration school of thought is based in pre-ECMAScript 6
   * behaviors, where there was no such thing as block scope, only function
   * scope. Since all var statements are hoisted to the top of the function
   * anyway, some believe that declaring all variables in a single declaration
   * at the top of the function removes confusion around scoping rules.
   *
   * https://eslint.org/docs/rules/one-var
   */
  'one-var': 'off',

  /**
   * Require or disallow newlines around variable declarations .
   *
   * Some developers declare multiple var statements on the same line:
   *
   *    var foo, bar, baz;
   *
   * Others prefer to declare one var per line:
   *
   *    var foo,
   *        bar,
   *        baz;
   *
   * Keeping to one of these styles across a project’s codebase can help with
   * maintaining code consistency.
   *
   * This rule enforces a consistent newlines around variable declarations.
   * This rule ignores variable declarations inside for loop conditionals.
   *
   * https://eslint.org/docs/rules/one-var-declaration-per-line
   */
  'one-var-declaration-per-line': 'off',

  /**
   * Enforce consistent linebreak style for operators.
   *
   * When a statement is too long to fit on a single line, line breaks are
   * generally inserted next to the operators separating expressions. The first
   * style coming to mind would be to place the operator at the end of the line,
   * following the English punctuation rules.
   *
   * Some developers find that placing operators at the beginning of the line
   * makes the code more readable.
   *
   * https://eslint.org/docs/rules/operator-linebreak
   */
  'operator-linebreak': ['error', 'after'],

  /**
   * Require object keys to be sorted.
   *
   * When declaring multiple properties, some developers prefer to sort property
   * names alphabetically to be able to find necessary property easier at the
   * later time. Others feel that it adds complexity and becomes burden to
   * maintain.
   *
   * https://eslint.org/docs/rules/sort-keys
   */
  'sort-keys': ['error', 'asc', {
    caseSensitive: false,
    natural: true,
  }],
};
