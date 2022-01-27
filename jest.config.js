module.exports = {
  roots: ['<rootDir>/tests'],
  transform: { '^.+\\.ts$': 'ts-jest' },
  resolver: '<rootDir>/tests/jest-resolver.js',
};
