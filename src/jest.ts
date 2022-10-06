import { Linter } from 'eslint';

const config: Linter.BaseConfig = {
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    // eslint-plugin-jest
    'jest/expect-expect': ['error', { assertFunctionNames: ['expect**'] }],
  },
};

export = config;
