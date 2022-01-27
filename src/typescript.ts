import { Linter } from 'eslint';

const config: Linter.BaseConfig = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript Rules
    '@typescript-eslint/array-type': ['error'],
    '@typescript-eslint/consistent-type-assertions': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: { accessors: 'explicit', constructors: 'explicit', parameterProperties: 'explicit' },
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      { default: ['static-field', 'instance-field', 'constructor', 'static-method', 'instance-method'] },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'class', format: ['PascalCase'] },
      { selector: 'classProperty', format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'enum', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['PascalCase'] },
      { selector: 'interface', format: ['PascalCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'function', format: ['camelCase'] },
      { selector: 'method', format: ['camelCase'] },
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
    ],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['error'],
    '@typescript-eslint/no-parameter-properties': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
    '@typescript-eslint/prefer-readonly': ['error'],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/restrict-template-expressions': ['off'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/unified-signatures': ['error'],

    // Extension Rules
    '@typescript-eslint/no-empty-function': ['off'],
    'no-shadow': ['off'],
    '@typescript-eslint/no-shadow': ['error', { hoist: 'all', ignoreFunctionTypeParameterNameValueShadow: true }],
    'no-unused-expressions': ['off'],
    '@typescript-eslint/no-unused-expressions': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'padding-line-between-statements': ['off'],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
    ],

    // eslint-plugin-import
    'import/no-unresolved': ['off'],

    // eslint-plugin-jsdoc
    'jsdoc/check-param-names': ['error', { checkDestructured: false }],
    'jsdoc/require-param': ['error', { checkDestructured: false }],
    'jsdoc/require-param-type': ['off'],
    'jsdoc/require-returns-type': ['off'],
  },
};

export = config;
