import { Linter } from 'eslint';

const config: Linter.BaseConfig = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  plugins: ['import', 'jsdoc', 'jest'],
  parserOptions: { ecmaVersion: 'latest' },
  rules: {
    // Possible Problems
    'array-callback-return': ['error'],
    'no-constructor-return': ['error'],
    'no-duplicate-imports': ['error'],
    'no-promise-executor-return': ['error'],
    'no-self-compare': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unused-private-class-members': ['error'],
    'no-use-before-define': ['error'],
    'require-atomic-updates': ['error'],

    // Suggestions
    'complexity': ['error'],
    'eqeqeq': ['error', 'always'],
    'max-classes-per-file': ['error', 1],
    'no-array-constructor': ['error'],
    'no-caller': ['error'],
    'no-else-return': ['error'],
    'no-eval': ['error'],
    'no-extra-bind': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-param-reassign': ['error'],
    'no-return-await': ['error'],
    'no-throw-literal': ['error'],
    'no-undef-init': ['error'],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
        allowAfterSuper: true,
        allowAfterThisConstructor: true,
        enforceInMethodNames: false,
        allowFunctionParams: true,
      },
    ],
    'no-useless-constructor': ['error'],
    'no-var': ['error'],
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-template': ['error'],
    'radix': ['error', 'as-needed'],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],

    // Layout & Formatting
    'brace-style': ['error'],
    'new-parens': 'error',
    'space-in-parens': ['error', 'never'],

    // eslint-plugin-import
    'import/extensions': ['error', { js: 'never', ts: 'never', jsx: 'never', tsx: 'never', json: 'always' }],
    'import/no-cycle': ['error'],
    'import/no-deprecated': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-self-import': ['error'],
    'import/no-useless-path-segments': ['error'],
    'import/order': ['error'],

    // eslint-plugin-jsdoc
    'jsdoc/check-indentation': ['error'],
    'jsdoc/newline-after-description': ['off'],
    'jsdoc/require-jsdoc': ['off'],
    'jsdoc/require-returns': ['off'],

    // eslint-plugin-jest
    'jest/expect-expect': ['error', { assertFunctionNames: ['expect**'] }],
  },
};

export = config;
