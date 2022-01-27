import { Linter } from 'eslint';
import typescript from './typescript';

const tsextends = typescript.extends as string[];
const tsplugins = typescript.plugins as string[];
const tsrules = typescript.rules as Linter.RulesRecord;
const config: Linter.BaseConfig = {
  extends: [
    ...tsextends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testing-library/react',
  ],
  plugins: [...tsplugins, 'react', 'react-hooks', 'jsx-a11y', 'testing-library'],
  settings: { react: { version: 'detect' } },
  rules: {
    ...tsrules,

    // React Rules
    'react/react-in-jsx-scope': ['off'],

    // TypeScript Rules
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'class', format: ['PascalCase'] },
      { selector: 'classProperty', format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'enum', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['PascalCase'] },
      { selector: 'interface', format: ['PascalCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'method', format: ['camelCase', 'PascalCase'] },
      { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
    ],
  },
};

export = config;
